import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyForm } from "./MyForm";

class App extends Component {
  state = {
    response: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Welcome to Borrowish </p>
          <p>{this.state.response}</p>
        </header>
      </div>
      
    );
  }
}

const testApp = () => {
  return (
    <div style={{ textAlign: "center"}}>
        <MyForm onSubmit={() => {}}    />
    </div>
    );
}

export default App;
