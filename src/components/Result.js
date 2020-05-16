import React, { Component } from "react";
import { connect } from "react-redux";
import { hideResult } from "./Controller";
import ShowData from "./ShowData";
class Result extends Component {
  render() {
    const { showResult } = this.props;
    const {
      cityName,
      temp,
      feels_like,
      humidity,
      pressure,
      isError,
    } = this.props.data;
    return (
      <div id="result" style={showResult}>
        <ShowData
          cityName={cityName}
          temp={temp}
          feels_like={feels_like}
          humidity={humidity}
          pressure={pressure}
          isError={isError}
        />

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
