const names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getMonth(date: Date) {
  return names[date.getMonth()];
}

export function formatDate(date: Date) {
  const dayStr = date.getDate().toString().padStart(2, "0");
  const monthStr = getMonth(date);
  const yearStr = date.getFullYear();

  const hourStr = date.getHours().toString().padStart(2, "0");
  const minutStr = date.getMinutes().toString().padStart(2, "0");
  const secondStr = date.getSeconds().toString().padStart(2, "0");

  return `${dayStr} ${monthStr} ${yearStr} ${hourStr}:${minutStr}:${secondStr}`;
}

export function changeDateWithControl(
  date: Date,
  prevDate: Date,
  getBiggerPart: (this: Date) => number,
  setBiggerPart: (this: Date, value: number) => void,
  setSmallerPart: (this: Date, value: number) => void,
  last: number
) {
  if (getBiggerPart.call(date) > getBiggerPart.call(prevDate)) {
    setSmallerPart.call(date, last + 1);
    setBiggerPart.call(date, getBiggerPart.call(prevDate));
  } else if (getBiggerPart.call(date) < getBiggerPart.call(prevDate)) {
    setSmallerPart.call(date, last);
    setBiggerPart.call(date, getBiggerPart.call(prevDate));
  }
}
