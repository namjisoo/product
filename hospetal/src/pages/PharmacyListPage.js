import React, { useEffect, useRef, useState } from "react";
import Warn from "../components/Warn";
import { getDatas } from "../api/firebase";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Map from "./../components/Map";
import { getUserLocation } from "../utils/geolocation";
import haversine from "haversine";
import styles from "./HospitalListPage.module.css";
import searchIcon from "../assets/icon/search_icon.svg";
import stylesBtn from "../components/Button.module.css";
import PharmacyItem from "./../components/PharmacyItem";

const PharmacyListPage = () => {
  const [hospitalItems, setHospitalItems] = useState([]);
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isInit, setIsInit] = useState(true);
  const [userLocation, setUserLocation] = useState(null);
  const [sortBy, setSortBy] = useState("distance"); // 기본 정렬 기준은 거리
  const mapRef = useRef();

  // 검색기능
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchItems = items.filter(({ title }) => title.includes(keyword));
    setItems(searchItems);
  };

  // 약국데이터뿌리기
  const handleLoad = async () => {
    const fetchedHospitalItems = await getDatas("pharmacy");
    setHospitalItems(fetchedHospitalItems);

    console.log(fetchedHospitalItems);

    setItems(fetchedHospitalItems);
    setIsInit(false);
  };

  // 현위치를 가져오는 함수
  const handleGetCurrentLocation = async () => {
    try {
      const location = await getUserLocation();
      setUserLocation(location);
      if (mapRef.current) {
        mapRef.current.panTo({
          lat: location.lat,
          lng: location.lng,
        });
      }
    } catch (error) {
      console.error("사용자 위치를 가져오는 중 오류 발생:", error);
    }
  };

  // 정렬 기준에 따라 병원 목록 정렬
  const sortHospitalList = async () => {
    const sortedItems = JSON.parse(JSON.stringify(items)); // Deep copy
    if (sortBy === "distance") {
      try {
        const location = await getUserLocation();
        sortedItems.sort((a, b) => {
          // a와 b 간의 거리를 계산하여 비교
          const distanceA = haversine(
            { latitude: a.latitude, longitude: a.longitude },
            location
          );
          const distanceB = haversine(
            { latitude: b.latitude, longitude: b.longitude },
            location
          );

          return distanceA - distanceB;
        });
        setUserLocation(location); // 사용자 위치 업데이트
      } catch (error) {
        console.error("사용자 위치를 가져오는 중 오류 발생:", error);
      }
    } else if (sortBy === "rating") {
      sortedItems.sort((a, b) => {
        // 별점 순으로 정렬하는 로직 추가
        // 예: a와 b의 별점을 비교
        return b.rating - a.rating;
      });
    }
    setItems(sortedItems);
  };

  // 정렬 기준 변경 시 호출
  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    sortHospitalList();
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className={styles.hospitalListContainer}>
      <h1 className={styles.title}>동물병원&middot;약국찾기</h1>
      <div className={styles.btnFilter}>
        <Button className={stylesBtn.itemBtn}>
          <Link to="/hospital" className={styles.link}>
            병원
          </Link>
        </Button>
        <Button className={stylesBtn.itemBtnActive}>
          <Link to="/pharmacy" className={styles.link}>
            약국
          </Link>
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="업체명을 입력해주세요"
          ></input>
          <button className={styles.searchBtn} type="submit">
            <img className={styles.searchIcon} src={searchIcon} alt="검색" />
          </button>
        </div>
      </form>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={handleGetCurrentLocation}>
          현위치
        </button>
        <div className={styles.btnFilter}>
          <button
            className={styles.btn}
            onClick={() => handleSortChange("distance")}
          >
            거리순
          </button>
          <button
            className={styles.btn}
            onClick={() => handleSortChange("rating")}
          >
            별점순
          </button>
        </div>
      </div>
      <Map userLocation={userLocation} mapRef={mapRef} />

      {items.length === 0 && !isInit ? (
        <Warn
          title="조건에 맞는 병원이나 약국이 없어요"
          description="올바른 검색어가 맞는지 다시 한 번 확인해 주세요"
        />
      ) : (
        <div className={styles.itemContainer}>
          {items.map((item) => (
            <PharmacyItem key={item.docId} pharmacy={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PharmacyListPage;
