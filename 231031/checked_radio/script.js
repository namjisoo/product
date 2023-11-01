const resultBtn = document.getElementById("resultBtn");

resultBtn.addEventListener("click", () => {
  const name = document.querySelector("input[name='name']").value;
  const radioEl = document.querySelectorAll("input[name='gender']");
  let radioVal;
  radioEl.forEach((el) => {
    if (el.checked) {
      radioVal = el.value;
    }
  });
  const checkboxEl = document.querySelectorAll("input[type='checkbox']");
  const checkboxArr = [];
  checkboxEl.forEach((el) => {
    if (el.checked) {
      checkboxArr.push(el.id);
    }
  });
  const textareaEl = document.querySelector("textarea");
  textareaEl.innerHTML = `${name}씨\n 당신의 성별은 ${radioVal}이고, \n취미는  ${checkboxArr.toString()}이군요!`;
});
