import React, { useState, useEffect } from "react";
import Button from "../component/Button";
import styles from "./MyPage.module.css";
import SideBar from "../component/SideBar";
import PostArray from "../component/PostArray";
import PostList from "../component/PostList";

function Post() {
  const [selectedItems, setSelectedItems] = useState(() => {
    // Load selected items from local storage on component mount
    const storedItems = localStorage.getItem("selectedItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  const [postArray, setPostArray] = useState(PostArray);

  const handleDelete = () => {
    // 선택된 항목을 삭제하는 로직
    const updatedPosts = postArray.filter(
      (post) => !selectedItems.includes(post.id)
    );

    // 업데이트된 게시물 배열을 사용하여 상태를 업데이트
    setPostArray(updatedPosts);

    // 선택된 항목 초기화
    setSelectedItems([]);
  };

  const handleSelectedItemsChange = (items) => {
    // 새로운 선택된 항목을 받아와서 state를 업데이트합니다.
    setSelectedItems(items);
  };

  // Save selected items to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  }, [selectedItems]);

  return (
    <div className={styles.containerBox}>
      <SideBar />
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>게시글 관리</h1>
        {/* PostList에 callback 함수를 전달하여 선택된 항목 상태를 업데이트합니다. */}
        <PostList
          items={postArray}
          onSelectedItemsChange={handleSelectedItemsChange}
        />
        <div className={styles.retouch_a}>
          {/* 삭제 버튼 클릭 시 handleDelete 함수 호출 */}
          <Button className={styles.correction} onClick={handleDelete}>
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Post;
