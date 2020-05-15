import React, { Component } from "react";
import { connect } from "react-redux";
import { hideResult } from "./Controller";
class Result extends Component {
  render() {
    const { showResult } = this.props;
    const { cityName , temp, feels_like , humidity, pressure } = this.props.data;
    console.log(feels_like);
    return (
      <div id="result" style={showResult}>
        <div>
          <span onClick={() => this.props.hideResult()}>X</span>
          <h2>Thời tiết tại: {cityName}</h2>
          <div id="result-detail">
            <span>Nhiệt độ: <b>{temp}°C</b></span>
            <span>Nhiệt độ cảm nhận: <b>{feels_like}°C</b></span>
            <span>Độ ẩm: <b>{humidity}%</b></span>
            <span>Áp suất: <b>{pressure}hPa</b></span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showResult: state.showResult,
    data: state.data,
  };
}

export default connect(mapStateToProps, { hideResult })(Result);
