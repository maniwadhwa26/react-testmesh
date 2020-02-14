import React, { Component } from "react";
import { render } from "react-dom";
import CreateQuestionComponent from "./Components/CreateQuestionComponent";
import "./style.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <CreateQuestionComponent />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
