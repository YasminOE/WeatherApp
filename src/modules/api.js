'user strict';

const api_key = 'a8689032cf9984283301661138eca6ca';


/** 
* Fetch data from server
* @param {string} URL API url
* @param {Function} callback
*/
export const fetchData = function(URL, callback){
  fetch(`${URL}&appid=${api_key}`)
    .then( res => res.json())
    .then(data => callback(data));
};

export const url = {
  currentWeather(lat,lon){
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`;
  },
  forecast(lat,lon){
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`;
  },
  airPollution(lat,lon){
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&units=metric`;
  },
  reverseGeo(lat,lon){
    return `http://api.openweathermap.org/geo/2.5/reverse?${lat}&${lon}&limit=5`;
  },
  /**
   * 
   * @param {string} query search query e.g: 'London 
   */
  geo(query){
    return `http://api.openweathermap.org/geo/2.5/direct?q=${query}&limit=5`;
  }

};
