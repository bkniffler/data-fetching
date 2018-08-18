import React, { Component } from "react";
import { get } from "lodash";
import logo from "./logo.svg";
import "./App.css";
import { Fetch } from "react-data-fetching";

const Loader = () => "Loading!";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Fetch
            loader={<Loader />} // Replace this with your lovely handcrafted loader
            url="https://api.github.com/users/octocat"
            timeout={5000}
          >
            {p => (
              <div className={console.log(p)}>
                <h1>Username</h1>
                <p>{get(p, "data.name")}</p>
                <pre>
                  <code>{JSON.stringify(get(p, "data") || {}, null, 3)}</code>
                </pre>
              </div>
            )}
          </Fetch>
        </p>
      </div>
    );
  }
}

export default App;
