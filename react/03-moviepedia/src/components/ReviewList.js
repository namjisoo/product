import { useContext, useState } from "react";
import "./ReviewList.css";
import ReviewForm from "./ReviewForm";
import LocaleContext from "../contexts/LocaleContext";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  const locale = useContext(LocaleContext);

  const handleDeleteClick = () => onDelete(item.docId, item.imgUrl);
  const handleEditClick = () => {
    onEdit(item.id);
  };
  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} />
      <div>
        <h1>{item.title}</h1>
        <span>{item.rating}</span>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <p>현재 언어 : {locale}</p>
        <button onClick={handleEditClick}>수정</button>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete, onUpdate, onUpdateSuccess }) {
  // 바뀌는 것이 리뷰리스트아이템이기때문에 여기에 useState를 쓴다.
  const [editingId, setEditingId] = useState(null);

  return (
    <ul>
      {items.map((item) => {
        if (item.id === editingId) {
          // 수정 버튼을 눌렀을 때
          // const title = item.title ,,, 구조분해
          const { title, rating, content, imgUrl, docId } = item;
          const initialValues = { title, rating, content, imgUrl: null };

          const handleCancel = () => setEditingId(null);

          const handleSubmit = (collectionName, formData) => {
            const result = onUpdate(collectionName, formData, docId, imgUrl);

            if (result === null) {
              alert("리뷰를 수정할 수 없습니다. \n관리자에게 문의하세요");
            }
            return result;
          };

          const handleSubmitSuccess = (review) => {
            onUpdateSuccess(review);
            setEditingId(null);
          };

          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
                onSubmitSuccess={handleSubmitSuccess}
              />
            </li>
          );
        }

        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEditingId}
            />
            {/* 프롭의 앞: 해당 컴포넌트에서 가져온다. 뒤: 현재 함수공간 위쪽에서 실행된다. */}
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
