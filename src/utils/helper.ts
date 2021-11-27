import { URL } from "url";

export const getPath = (url: string) => {
  return new URL(url).pathname;
};

export const convertStringToBool = (string: string) => string === "true";

export const getQueryString = (data: any) => {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value as any)}`
    )
    .join("&");
};

export const getTimeinEpoch = (date: number) => {
  return Math.floor(date / 1000);
};

export const getDate = (date: Date, format: "YYYY-MM-DD" | "DD-MM-YYYY") => {
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0");
  var yyyy = date.getFullYear();
  let formatedDate;
  if (format === "YYYY-MM-DD") {
    formatedDate = yyyy + "-" + mm + "-" + dd;
  } else if (format === "DD-MM-YYYY") {
    formatedDate = dd + "-" + mm + "-" + yyyy;
  }
  return formatedDate;
};

export const convertMillisToMinutesAndSeconds = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = parseInt(((millis % 60000) / 1000).toFixed(0), 10);
  return seconds === 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
