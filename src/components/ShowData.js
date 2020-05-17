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

    const checkTempColor = (value) =>
      value > 34
        ? { color: "#ff3b3b" }
        : value < 30
        ? { color: "#03da55" }
        : { color: "#eaff3b" };

    const checkHumidityColor = (value) =>
      value < 40
        ? { color: "#ff3b3b" }
        : value >= 40 && value < 60
        ? { color: "#eaff3b" }
        : value >= 60 && value < 80
        ? { color: "#03da55" }
        : value >= 80 && value < 90
        ? { color: "#7766fd" }
        : { color: "#7e26b5" };

    if (!isError) {
      return (
        <div>
          <span onClick={() => this.props.hideResult()}>X</span>
          <h2>Nhiệt độ tại: {cityName}</h2>
          <div id="result-detail">
            <span>
              Nhiệt độ: <b style={checkTempColor(temp)}>{temp}°C</b>
            </span>
            <span>
              Nhiệt độ cảm nhận:{" "}
              <b style={checkTempColor(feels_like)}>{feels_like}°C</b>
            </span>
            <span>
              Độ ẩm: <b style={checkHumidityColor(humidity)}>{humidity}%</b>
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
