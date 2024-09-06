export default function converter(color = "") {
  if (color.length < 7) {
    return "введите значение цвета в формате HEX";
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  return result
    ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )})`
    : "invalid HEX format";
}
