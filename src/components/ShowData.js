import React, { Component } from "react";
import { connect } from "react-redux";

import { hideResult } from "./Controller";
class ShowData extends Component {
  render() {
    const {
      cityName,
      temp,
      feels_like,
      humidity,
      pressure,
      isError,
    } = this.props;

    const checkTemp = (value) => {
      if (value > 34) {
        return { color: "#ff3b3b" };
      }
      if ((value >= 30) & (value <= 34)) {
        return { color: "#eaff3b" };
      }
      return { color: "#03da55" };
    };

    const checkHumidity = (value) => {
      if (value < 40) {
        return { color: "#ff3b3b" };
      } else if (value >= 40 && value < 60) {
        return { color: "#eaff3b" };
      } else if (value >= 60 && value < 80) {
        return { color: "#03da55" };
      }
      return {
        color: "#7e26b5",
      };
    };

    if (!isError) {
      return (
        <div>
          <span onClick={() => this.props.hideResult()}>X</span>
          <h2>Nhiệt độ tại: {cityName}</h2>
          <div id="result-detail">
            <span>
              Nhiệt độ: <b style={checkTemp(temp)}>{temp}°C</b>
            </span>
            <span>
              Nhiệt độ cảm nhận:{" "}
              <b style={checkTemp(feels_like)}>{feels_like}°C</b>
            </span>
            <span>
              Độ ẩm: <b style={checkHumidity(humidity)}>{humidity}%</b>
            </span>
            <span>
              Áp suất: <b>{pressure}hPa</b>
            </span>
          </div>
        </div>
      );
    }
    return (
      <div>
        <span onClick={() => this.props.hideResult()}>X</span>
        <h3>
          Tên thành phố bạn nhập không tìm thấy <br />
          Vui lòng thử lại
        </h3>
      </div>
    );
  }
}

export default connect(null, { hideResult })(ShowData);
