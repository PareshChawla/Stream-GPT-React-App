
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN ,
  }
};

export const IMG_CDN_URL1 = "https://image.tmdb.org/t/p/w500";
export const IMG_CDN_URL2 = "https://image.tmdb.org/t/p/original";