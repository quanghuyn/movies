export const fetcher = (...args) => fetch(...args).then((res) => res.json());
// API Key: dc53e961c475e293222eece8d1187ddb

export const formatDate = (dateStr) => {
  const [year, month, day] = dateStr?.split("-");
  let newDate = `${day}-${month}-${year}`;
  return newDate;
};


//  url poter && background
export  const Poster = 'https://image.tmdb.org/t/p/w500'
export const Backdrop = 'https://image.tmdb.org/t/p/original'

// URL API

const baseURL = "https://api.themoviedb.org/3/movie/"
const key = "api_key=dc53e961c475e293222eece8d1187ddb&language=en-US"
export const UrlApi = { 
  getApi (type, numPage = 1) { return `${baseURL}${type}?${key}&page=${numPage}`},
  getApiDetails (type) { return `${baseURL}${type}?${key}`},
}