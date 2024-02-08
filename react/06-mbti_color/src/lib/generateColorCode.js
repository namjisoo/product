function generateRandomHex() {
  const num = Math.floor(Math.random() * 256);
  const hex = num.toString(16).padStart(2, "0").toUpperCase();
  return hex;
  // padStart (문자열의 최대 길이, 만약에 한자리면 이걸로 앞에 채우겠다.)
}

export default function generateColorCode() {
  const colorCode = `#${generateRandomHex()}${generateRandomHex()}${generateRandomHex()}`;
  return colorCode;
}
