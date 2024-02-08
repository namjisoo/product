import React, { useEffect, useRef, useState } from "react";

const Map = ({ mapRef, userLocation }) => {
  const mapContainer = useRef(null);
  const { kakao } = window;
  const position = new kakao.maps.LatLng(36.328724, 127.423033);
  const mapOptions = {
    center: position, // 지도의 중심좌표
    level: 2, // 지도의 확대 레벨
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOptions);
    // mapRef 업데이트 현위치를 로딩하기 위한
    mapRef.current = map;

    const imageSrc = "https://i.ibb.co/M9jmHYw/1.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(20, 20) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서

    const imageSrc2 = "https://i.ibb.co/VJ7nqHR/2.png", // 마커이미지의 주소입니다
      imageSize2 = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption2 = { offset: new kakao.maps.Point(20, 20) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서

    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      markerPosition = new kakao.maps.LatLng(37.586471, 126.974769);

    const PhMarkerImage = new kakao.maps.MarkerImage(
        imageSrc2,
        imageSize2,
        imageOption2
      ),
      PhmarkerPosition = new kakao.maps.LatLng(37.586471, 126.974769);

    // 마커를 표시할 위치와 title 객체 배열입니다
    const positions = [
      {
        title: "동물종합병원",
        address: "대전 중구 대종로 605",
        latlng: new kakao.maps.LatLng(36.3354935001554, 127.416887702802),
      },
      {
        title: "두근동물병원",
        address: "대전 중구 대종로594번길 18",
        latlng: new kakao.maps.LatLng(36.3353527622679, 127.41907059668),
      },
      {
        title: "동물 외상센터",
        address: "대전 중구 선화서로 76",
        latlng: new kakao.maps.LatLng(36.3303563292653, 127.4169436411),
      },
      {
        title: "동물 연구소",
        address: "대전 중구 목중로26번길 52",
        latlng: new kakao.maps.LatLng(36.3375878424054, 127.413330416181),
      },
      {
        title: "웰니스동물병원",
        address: "대전 중구 목중로 2",
        latlng: new kakao.maps.LatLng(36.3348796862194, 127.413209405363),
      },
      {
        title: "이빨튼튼동물병원",
        address: "대전 중구 대전천서로 529",
        latlng: new kakao.maps.LatLng(36.3339824781791, 127.422793819547),
      },
      {
        title: "정신 건강 동물병원",
        address: "대전 중구 대흥로111번길 30-18",
        latlng: new kakao.maps.LatLng(36.3246610525623, 127.424932485382),
      },
      {
        title: "암 동물병원",
        address: "대전 중구 중앙로 123",
        latlng: new kakao.maps.LatLng(36.3280388039107, 127.423572936651),
      },
      {
        title: "동물 전문 이비인후과",
        address: "대전 중구 중교로 9",
        latlng: new kakao.maps.LatLng(36.324479917011, 127.421010287951),
      },
      {
        title: "동물 재활 센터",
        address: "대전광역시 중구 중앙로 126",
        latlng: new kakao.maps.LatLng(36.3276960522504, 127.4241924206678),
      },
      {
        title: "환경 친화 약국",
        address: "대전 중구 중앙로109번길 10-2 ",
        latlng: new kakao.maps.LatLng(36.3279702603776, 127.422365855953),
      },
      {
        title: "온라인 약국",
        address: "대전 중구 중앙로129번길 27",
        latlng: new kakao.maps.LatLng(36.3291502985652, 127.423399642045),
      },
      {
        title: "비타민 약국",
        address: "대전 중구 중앙로121번길 37",
        latlng: new kakao.maps.LatLng(36.329272262945, 127.422319869478),
      },
      {
        title: "건강 약국",
        address: "대전 중구 중앙로137번길 5 ",
        latlng: new kakao.maps.LatLng(36.3286081901062, 127.424709343605),
      },
      {
        title: "동물 약국",
        address: "대전 중구 중앙로 116 ",
        latlng: new kakao.maps.LatLng(36.3272320184746, 127.422773051221),
      },
      {
        title: "녹십자 약국",
        address: "대전 중구 대종로 516 ",
        latlng: new kakao.maps.LatLng(36.3300842404546, 127.424604198183),
      },
      {
        title: "허브 약국",
        address: "대전 중구 대종로505번길 10",
        latlng: new kakao.maps.LatLng(36.329197936019, 127.424501937575),
      },
      {
        title: "약학 치료 센터",
        address: "대전 중구 대종로529번길 43",
        latlng: new kakao.maps.LatLng(36.3297469628087, 127.42102848834),
      },
      {
        title: "물리지료 약국",
        address: "대전 중구 대종로 471",
        latlng: new kakao.maps.LatLng(36.3269775622949, 127.426289633281),
      },
      {
        title: "구룡 약국",
        address: "대전 중구 선화동 236-2",
        latlng: new kakao.maps.LatLng(36.3291159191051, 127.421857607029),
      },
    ];

    // const positions2 = [
    //   {
    //     title: "환경 친화 약국",
    //     address: "대전 중구 중앙로109번길 10-2 ",
    //     latlng: new kakao.maps.LatLng(36.3279702603776, 127.422365855953),
    //   },
    //   {
    //     title: "온라인 약국",
    //     address: "대전 중구 중앙로129번길 27",
    //     latlng: new kakao.maps.LatLng(36.3291502985652, 127.423399642045),
    //   },
    //   {
    //     title: "비타민 약국",
    //     address: "대전 중구 중앙로121번길 37",
    //     latlng: new kakao.maps.LatLng(36.329272262945, 127.422319869478),
    //   },
    //   {
    //     title: "건강 약국",
    //     address: "대전 중구 중앙로137번길 5 ",
    //     latlng: new kakao.maps.LatLng(36.3286081901062, 127.424709343605),
    //   },
    //   {
    //     title: "동물 약국",
    //     address: "대전 중구 중앙로 116 ",
    //     latlng: new kakao.maps.LatLng(36.3272320184746, 127.422773051221),
    //   },
    //   {
    //     title: "녹십자 약국",
    //     address: "대전 중구 대종로 516 ",
    //     latlng: new kakao.maps.LatLng(36.3300842404546, 127.424604198183),
    //   },
    //   {
    //     title: "허브 약국",
    //     address: "대전 중구 대종로505번길 10",
    //     latlng: new kakao.maps.LatLng(36.329197936019, 127.424501937575),
    //   },
    //   {
    //     title: "약학 치료 센터",
    //     address: "대전 중구 대종로529번길 43",
    //     latlng: new kakao.maps.LatLng(36.3297469628087, 127.42102848834),
    //   },
    //   {
    //     title: "물리지료 약국",
    //     address: "대전 중구 대종로 471",
    //     latlng: new kakao.maps.LatLng(36.3269775622949, 127.426289633281),
    //   },
    //   {
    //     title: "구룡 약국",
    //     address: "대전 중구 선화동 236-2",
    //     latlng: new kakao.maps.LatLng(36.3291159191051, 127.421857607029),
    //   },
    // ];

    const Phpositions = [
      {
        title: "dw",
        latlng: new kakao.maps.LatLng(36.328724, 127.423033),
      },
    ];

    // 마커 클릭시 인포윈도우로 표시
    const markers = [];

    for (let i = 0; i < positions.length; i++) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        title: positions[i].title,
        image: markerImage,
      });

      markers.push(marker);

      kakao.maps.event.addListener(marker, "click", function () {
        // 클릭한 마커의 정보를 인포윈도우로 표시
        const infowindow = new kakao.maps.InfoWindow({
          content: `
            <div style="background-color: white; color: black; font-size: 14px; padding: 10px; border-radius: 5px; border: none;">
              <strong>${positions[i].title}</strong><br>
              주소: ${positions[i].address}<br>
              
            </div>
          `,
        });

        infowindow.open(map, marker);
      });
    }

    mapRef.current = map;

    // 클릭한 마커만 지도에 표시되도록 설정
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 1,
      disableClickZoom: true,
      calculable: true,
      markers: markers,
      // styles: // 클러스터 스타일 지정 가능
    });

    // for (var i = 0; i < positions.length; i++) {
    //   // 마커 이미지의 이미지 크기 입니다
    //   const imageSize = new kakao.maps.Size(65, 65);

    //   // 마커 이미지를 생성합니다
    //   const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    //   // 마커를 생성합니다
    //   var marker = new kakao.maps.Marker({
    //     map: map, // 마커를 표시할 지도
    //     position: positions[i].latlng, // 마커를 표시할 위치
    //     title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다

    //     image: markerImage, // 마커 이미지
    //   });
    // }

    // for (let j = 0; j < Phpositions.length; j++) {
    //   const imageSize = new kakao.maps.Size(65, 65);
    //   const phmarkerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    //   var marker = new kakao.maps.Marker({
    //     map: map, // 마커를 표시할 지도
    //     position: Phpositions[j].latlng, // 마커를 표시할 위치
    //     title: Phpositions[j].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    //     image: PhMarkerImage, // 마커 이미지
    //   });
    // }

    // // 마커가 지도 위에 표시되도록 설정
    // marker.setMap(map);

    // 현위치 마커 생성
    const userMarker = new kakao.maps.Marker({
      map: map,
      position: position,
      title: "현위치",
      image: new kakao.maps.MarkerImage(
        "https://i.ibb.co/VJ7nqHR/2.png",
        new kakao.maps.Size(64, 69),
        { offset: new kakao.maps.Point(20, 20) }
      ),
    });

    // 클릭 이벤트가 발생했을 때 현위치의 정보를 인포윈도우로 표시
    kakao.maps.event.addListener(userMarker, "click", function () {
      const infowindow = new kakao.maps.InfoWindow({
        content: `
              <div style="background-color: white; color: balck; font-size: 14px; padding: 10px; border-radius: 5px; border:none;">
                <strong>현위치</strong><br>
              </div>
            `,
      });

      infowindow.open(map, userMarker);
    });
  }, [userLocation]); // 현위치 로딩을 위한 userLocation을 의존성으로 추가

  // 주소 검색
  // const handleSearch = () => {
  //   const { kakao } = window;

  //   const addressSearch = new kakao.maps.services.Places();
  //   const input = document.getElementById("addressSearchInput");

  //   addressSearch.keywordSearch(input.value, function (result, status) {
  //     if (status === kakao.maps.services.Status.OK) {
  //       // 검색 결과가 있을 경우
  //       const selectedAddress = result[0];
  //       const latlng = new kakao.maps.LatLng(
  //         selectedAddress.y,
  //         selectedAddress.x
  //       );

  //       // 검색된 주소의 좌표로 지도 이동
  //       mapRef.current.panTo(latlng);
  //     } else {
  //       // 검색 결과가 없을 경우
  //       console.error("검색 결과가 없습니다.");
  //     }
  //   });
  // };

  return (
    <div>
      <div
        id="map"
        ref={mapContainer}
        style={{ width: "1120px", height: "560px", display: "block" }}
      ></div>
      {/* <div>
        <input id="addressSearchInput" placeholder="주소를 검색하세요" />
        <button onClick={handleSearch}>주소 검색</button>
      </div> */}
    </div>
  );
};

export default Map;
