
const defaultWeather = {
    opacity: "0",
    top: "-500px",
}

const opacityResult = (state = defaultWeather, action) => {
  if (action.type === "SHOW_OPACITY") {
    return {
      ...state,
        opacity: "1",
        top: "25%",
    };
  }
  if (action.type === "HIDE_OPACITY") {
    return {
      ...state,
        opacity: "0",
        top: "-500px",

    };
  }
  
  return state;
};

export default opacityResult;
