import React, { Component } from "react";
import Result from "./Result";
import { connect } from "react-redux";
import {
  showResult,
  setApiToStore,
  errorGetData,
  fetchReduxThunk,
} from "./Controller";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
    };
  }
  getValueInput(e) {
    this.setState({
      cityName: e.target.value,
    });
  }

  getAPI() {
    this.props.fetchReduxThunk(this.state.cityName);
  }

  render() {
    return (
      <div id="app">
        <div id="background">
          <div></div>
        </div>
        <div id="main">
          <div id="title">
            <h1>Website kiểm tra nhiệt độ</h1>
            <div id="form">
              <input
                onChange={this.getValueInput.bind(this)}
                placeholder="Nhập tỉnh, thành phố"
                value={this.state.cityName}
              ></input>
              <button
                onClick={() => {
                  this.props.showResult();
                  this.getAPI();
                }}
              >
                <span>Xem kết quả</span>
              </button>
            </div>
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {
  showResult,
  setApiToStore,
  errorGetData,
  fetchReduxThunk,
})(Main);
