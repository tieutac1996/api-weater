const URL =
  "http://api.openweathermap.org/data/2.5/weather?appid=176eb9d535508235e116000ce82b167b&q=";


export function getTemp(cityName) {
  fetch(URL + cityName)
    .then((res) => res.json())
    .then((result) => {
      console.log(parseFloat(result.main.temp)-273.15);
      console.log(result.name);
    }).catch(error => error);
}
