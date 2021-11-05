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

export interface Config {
  dateSeparator: string;
  dateTimeSeparator: string;
  timeSeparator: string;
  dayLen: 1 | 2;
  yearLen: 2 | 4;
  hourLen: 1 | 2;
  minuteLen: 1 | 2;
  secondLen: 1 | 2;
}

export function getPositions(date: Date, config: Config) {
  const monthLen = getMonth(date).length;

  const afterDay = config.dayLen;
  const beforeMonth = afterDay + config.dateSeparator.length;
  const afterMonth = beforeMonth + monthLen;
  const beforeYear = afterMonth + config.dateSeparator.length;
  const afterDate = beforeYear + config.yearLen;

  const beforeTite = afterDate + config.dateTimeSeparator.length;
  const afterHours = beforeTite + config.hourLen;
  const beforeMinutes = afterHours + config.timeSeparator.length;
  const afterMinutes = beforeMinutes + config.minuteLen;
  const beforeSeconds = afterMinutes + config.timeSeparator.length;
  const afterSeconds = beforeSeconds + config.secondLen;

  return {
    afterDay: afterDay,
    beforeMonth: beforeMonth,
    afterMonth: afterMonth,
    beforeYear: beforeYear,
    afterDate: afterDate,
    beforeTite: beforeTite,
    afterHours: afterHours,
    beforeMinutes: beforeMinutes,
    afterMinutes: afterMinutes,
    beforeSeconds: beforeSeconds,
    afterSeconds: afterSeconds,
  };
}

function getMonth(date: Date) {
  return names[date.getMonth()];
}

export function formatDate(date: Date, config: Config) {
  const dayStr = date.getDate().toString().padStart(config.dayLen, "0");
  const monthStr = getMonth(date);
  const yearStr = date
    .getFullYear()
    .toString()
    .slice(-1 * config.yearLen);

  const hourStr = date.getHours().toString().padStart(config.hourLen, "0");
  const minutStr = date.getMinutes().toString().padStart(config.minuteLen, "0");
  const secondStr = date
    .getSeconds()
    .toString()
    .padStart(config.secondLen, "0");

  return `${dayStr}${config.dateSeparator}${monthStr}${config.dateSeparator}${yearStr}${config.dateTimeSeparator}${hourStr}${config.timeSeparator}${minutStr}${config.timeSeparator}${secondStr}`;
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
