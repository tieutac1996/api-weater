const URL =
  "https://api.openweathermap.org/data/2.5/weather?appid=176eb9d535508235e116000ce82b167b&q=";

export default function getTemp(cityName) {
  return fetch(URL + cityName)
    .then((res) => res.json())
    .then((result) => result.main);
}
