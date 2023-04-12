export const fetcher = (...args) => fetch(...args).then((res) => res.json());
// API Key: dc53e961c475e293222eece8d1187ddb

export const formatDate = (dateStr) => {
  const [year, month, day] = dateStr?.split("-");
  let newDate = `${day}-${month}-${year}`;
  return newDate;
};
