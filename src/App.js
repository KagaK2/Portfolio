import React, { Component } from "react";
import "./App.css";
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
