import React, { useState, useEffect } from "react";
import CommonTable from "./CommonTable";
import CommonTableColumn from "./CommonTableColumn";
import CommonTableRow from "./CommonTableRow";

const PostList = (props) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    // 항목의 선택 상태를 토글합니다.
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  useEffect(() => {
    // 부모 컴포넌트로 선택된 항목을 전달하는 콜백 함수 호출
    props.onSelectedItemsChange(selectedItems);
  }, [selectedItems, props.onSelectedItemsChange]);

  return (
    <>
      <CommonTable
        headersName={["", "번호", "위치", "닉네임", "제목", "게시일자"]}
      >
        {/* 각 항목에 대한 체크박스와 데이터 표시 */}
        {props.items.map((item) => (
          <CommonTableRow key={item.id}>
            <CommonTableColumn>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
            </CommonTableColumn>
            <CommonTableColumn>{item.number}</CommonTableColumn>
            <CommonTableColumn>{item.location}</CommonTableColumn>
            <CommonTableColumn>{item.nickname}</CommonTableColumn>
            <CommonTableColumn>{item.title}</CommonTableColumn>
            <CommonTableColumn>{item.date}</CommonTableColumn>
          </CommonTableRow>
        ))}
      </CommonTable>
    </>
  );
};

export default PostList;
