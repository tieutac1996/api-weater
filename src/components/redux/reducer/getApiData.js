const defaultWeather = {
  cityName: "",
  temp: "",
  feels_like: "",
  humidity: "",
  pressure: "",
};

function rounding(value) {
  const delta = (value - Math.round(value)) * 10;
  if (delta >= 5) {
    return Math.ceil(value);
  }
  return Math.round(value);
}

const getApiData = (state = defaultWeather, action) => {
  const kelvins = 273.15;
  if (action.type === "GET_API_DATA") {
    return {
      ...state,
      cityName: action.cityName,
      temp: action.temp - kelvins,
      feels_like: rounding(action.feels_like - kelvins),
      humidity: action.humidity,
      pressure: action.pressure,
    };
  }
  return state;
};

export default getApiData;
