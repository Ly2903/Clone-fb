export const getTimeString = (time) => {
  // "2023-01-28T12:16:10.712Z"
  const a = new Date(time);

  const nowYear = new Date().getFullYear();
  const date = a.getDate();
  const month = a.getMonth() + 1;
  const year = a.getFullYear();
  const hours = a.getHours();
  const minutes = a.getMinutes();
  return nowYear === year
    ? `${date} Tháng ${month} lúc ${hours}:${minutes}`
    : `${date} Tháng ${month}, ${year}`;
};
