import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteDatas, getData, getDatas, updateDatas } from "../api/firebase";
import Button from "../components/Button";
import ReservationModal from "../components/ReservationModal";
import ReviewForm from "../components/ReviewForm";
import stylesBtn from "../components/Button.module.css";
import Rating from "../components/Rating";
import Card from "../components/Card";
import Container from "../components/Container";
import stylesContainer from "../components/Container.module.css";
import styles from "./HospitalPage.module.css";
import mapIcon from "../assets/icon/발바닥_map-1.svg";
import LikeDislikeChart from "../components/LikeDislikeChart";
import paperplaneIcon from "../assets/icon/paper plane_w.svg";
import linkcopyIcon from "../assets/icon/icon_linkcopy.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ChatModal from "../components/ChatModal";
import Map from "./../components/Map";

const PharmacyPage = () => {
  const [pharmacy, setPharmacy] = useState({});
  const { pharmacyTitle } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  // 채팅창의 열림 여부 상태 추가
  const mapRef = useRef(); // useRef 선언

  const openModal = () => {
    console.log("모달열림");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openReview = () => {
    console.log("모달열림");
    setIsReviewOpen(true);
  };

  const closeReview = () => {
    setIsReviewOpen(false);
  };

  // 링크복사 버튼기능
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  // 약국목록 데이터 불러오기
  const handleLoad = async () => {
    const result = await getData("pharmacy", "title", "==", pharmacyTitle);
    console.log(result);
    setPharmacy(result);
  };

  // 채팅 창 열기
  const openChat = () => {
    setIsChatOpen(true);
    // 채팅창 열기 등의 로직 추가
  };

  // 채팅 버튼 클릭 시 실행될 함수
  const closeChat = () => {
    setIsChatOpen(false);
  };

  useEffect(() => {
    // hospitalTitle이 유효한 경우에만 데이터를 불러오도록 수정
    if (pharmacyTitle) {
      handleLoad();
    }
  }, [pharmacyTitle]);

  if (pharmacy === undefined) {
    // 데이터 로딩 중 로직 (로딩 스피너, 메시지 등을 표시할 수 있습니다)
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>{pharmacy?.title}</h1>
      {/* 지도 */}
      <Map mapRef={mapRef} />
      {/* mapRef를 Map 컴포넌트에 전달 */}
      <div className={styles.addWrapper}>
        <img src={mapIcon} className={styles.mapIcon} />
        <p>{pharmacy?.address}</p>
        <p>Tel.{pharmacy?.tel}</p>
      </div>
      {/* 채팅, 링크버튼 */}
      <div className={styles.btnWrapper}>
        <Button className={stylesBtn.chatBtn} onClick={openChat}>
          <img src={paperplaneIcon} className={styles.img} />
          채팅하기
        </Button>
        {isChatOpen && (
          <ChatModal onClose={closeChat} pharmacyTitle={pharmacyTitle} />
        )}
        <CopyToClipboard text={window.location.href} onCopy={handleCopy}>
          <Button className={stylesBtn.chatBtn}>
            <img src={linkcopyIcon} className={styles.img} />
            {isCopied ? "복사됨!" : "링크복사"}
          </Button>
        </CopyToClipboard>
      </div>
      {/* 내용 */}
      <ul className={styles.contentWrapper}>
        <li className={styles.content}>
          <span>영업시간</span> {pharmacy?.time}
        </li>
        <li className={styles.content}>
          <span>취급의약품</span> {pharmacy?.majorDrugs}
        </li>
        <li className={styles.content}>
          <span>주차</span> {pharmacy?.parking}
        </li>
        <li className={styles.content}>
          <span>이메일</span> {pharmacy?.email}
        </li>
        <li className={styles.content}>
          {/* <span>홈페이지</span> {pharmacy?.url} */}
        </li>
      </ul>
      <div className={styles.contentLine}></div>
      {/* 차트 */}
      <div className={styles.chartWrapper}>
        <LikeDislikeChart hospitalTitle={pharmacyTitle} />
      </div>
      <div>
        <div className={styles.contentLine2}></div>

        {/* 후기작성 */}
        <div className={styles.reviewTitle}>총 ㅁ개의 후기</div>
        <div className={styles.contentLine2}></div>
        <Button className={stylesBtn.ReviewBtn} onClick={openReview}>
          +후기 작성하기
        </Button>
        <ReviewForm
          pharmacy={pharmacy}
          isOpen={isReviewOpen}
          onClose={closeReview}
        ></ReviewForm>

        {/* 별점 */}
        <div className={styles.ratingWrapper}>
          <p>총 점</p>
          <h1>
            <Rating actualRating={pharmacy?.rating} className={styles.rating} />
            <span> 점</span>
          </h1>
          <Rating
            className={styles.rating}
            hoverRating={pharmacy?.rating}
          ></Rating>
        </div>

        {/* 후기리스트 */}
        <Container className={stylesContainer.reviewContainer}>
          {pharmacy?.reviews &&
            pharmacy.reviews.map(({ review }) => (
              <Card key={review.user}>
                <p>{review.comment}</p>
                <Rating>{review.rating}</Rating>
              </Card>
            ))}
        </Container>
      </div>
      {/* 예약버튼 */}
      <div>
        <Button className={stylesBtn.ReservationBtn2} onClick={openModal}>
          예약하기
        </Button>
        <ReservationModal
          pharmacy={pharmacy}
          isOpen={isModalOpen}
          onClose={closeModal}
        ></ReservationModal>
      </div>
    </div>
  );
};

export default PharmacyPage;
