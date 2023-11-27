const stars = document.querySelectorAll(".stars i");

function checkStars(clickIndex) {
  console.log("click", clickIndex);
  stars.forEach((star, i) => {
    // 조건식, 클릭된 별의 인덱스보다 작거나 같으면 active 클래스 추가(add)하고 크면 active클래스를 삭제(remove)한다.
    if (i <= clickIndex) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}
