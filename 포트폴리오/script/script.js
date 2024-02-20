// 스크롤이벤트
document.addEventListener("DOMContentLoaded", function () {
  let pages = document.querySelectorAll(".page");
  let currentPageIndex = 0;

  window.addEventListener("wheel", function (event) {
    let delta = event.deltaY;

    if (delta > 0) {
      // 스크롤 다운: 다음 페이지로 이동
      nextPage();
    } else {
      // 스크롤 업: 이전 페이지로 이동
      prevPage();
    }
  });

  function nextPage() {
    if (currentPageIndex < pages.length - 1) {
      currentPageIndex++;
      scrollToPage(currentPageIndex);
    }
  }

  function prevPage() {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      scrollToPage(currentPageIndex);
    }
  }

  function scrollToPage(index) {
    pages[index].scrollIntoView({ behavior: "smooth" });
  }
});

// 그림그리기 효과
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("brushstrokeCanvas");
  const ctx = canvas.getContext("2d");

  // 설정
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 그림 그리기
  let isDrawing = false;

  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseout", stopDrawing);

  function startDrawing(e) {
    isDrawing = true;
    draw(e);
  }

  function draw(e) {
    if (!isDrawing) return;

    ctx.lineWidth = 20;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "rgba(51, 51, 51, 0.5)";

    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }

  function stopDrawing() {
    isDrawing = false;
  }
});

// 스무스하게 이동
function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
}

// Add click event listeners to navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    smoothScroll(targetId);
  });
});
