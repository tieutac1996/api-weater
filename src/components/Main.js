import React, { Component } from "react";
import Result from "./Result";
import { connect } from "react-redux";
import { showResult, setApiToStore } from "./Controller";
import getTemp from "./api/getTemp";

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
    getTemp(this.state.cityName)
      .then((res) => {
        this.props.setApiToStore(
          this.state.cityName,
          res.temp,
          res.feels_like,
          res.humidity,
          res.pressure
        );
      })
      .catch((err) => console.log(err));

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



export default connect(null, { showResult, setApiToStore })(Main);
