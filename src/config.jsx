import axios from "axios";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const fetcherConfig = (args) => fetch(args.join('')).then((res) => res.json())
// API Key: dc53e961c475e293222eece8d1187ddb

export const formatDate = (dateStr) => {
  const [year, month, day] = dateStr?.split("-");
  let newDate = `${day}-${month}-${year}`;
  return newDate;
};

//  url poter && background
export  const Poster = 'https://image.tmdb.org/t/p/w500'
export const Backdrop = 'https://image.tmdb.org/t/p/original'
export const apiSearch = 'https://api.themoviedb.org/3/search/movie?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&page=1&include_adult=false'
// URL API
const baseURL = "https://api.themoviedb.org/3/movie/"
// const baseURLGenres = "https://api.themoviedb.org/3/genre/movie/"
const baseURLTV = "https://api.themoviedb.org/3/tv/"
const key = "api_key=dc53e961c475e293222eece8d1187ddb&language=en-US"

export const UrlApi = { 
  getApi (type, numPage = 1) { return `${baseURL}${type}?${key}&page=${numPage}`},
  getApiTv (type,numPage = 1) { return `${baseURLTV}${type}?${key}&page=${numPage}`},
  // getApiSearch (type,numPage = 1) { return `${baseURLTV}${type}?${key}&page=${numPage}`},
 
}

export const getExploreMovie = () => async function (config = {},page) {
  console.log(config);
  let genres = config.queryKey[2]
  let numpage = config.queryKey[1]
  console.log(config);
  const data = (
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dc53e961c475e293222eece8d1187ddb&language=en-US&sort_by=popularity.desc&page=${numpage}`, {
      params: {
        ...genres,
       
      },
    })
  ).data;

  return{...data}
    
;
};