import React from "react";
import CommonTable from "./table/CommonTable";
import CommonTableColumn from "./table/CommonTableColumn";
import CommonTableRow from "./table/CommonTableRow";

const ReservationList = (props) => {
  return (
    <>
      <CommonTable
        headersName={["", "번호", "위치", "닉네임", "제목", "게시일자"]}
      >
        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>01</CommonTableColumn>
          <CommonTableColumn>나눔&middot;분양</CommonTableColumn>
          <CommonTableColumn>땡이는 귀여워</CommonTableColumn>
          <CommonTableColumn>냥이들 츄르 나눔합니다!!</CommonTableColumn>
          <CommonTableColumn>2024-01-12</CommonTableColumn>
        </CommonTableRow>

        <CommonTableRow>
          <CommonTableColumn>
            <input type="checkbox" />
          </CommonTableColumn>
          <CommonTableColumn>01</CommonTableColumn>
          <CommonTableColumn>꿀팁</CommonTableColumn>
          <CommonTableColumn>카페모카라떼</CommonTableColumn>
          <CommonTableColumn>
            대형견 장난감은 테니스공이 최고!
          </CommonTableColumn>
          <CommonTableColumn>2024-01-12</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </>
  );
};
export default ReservationList;
