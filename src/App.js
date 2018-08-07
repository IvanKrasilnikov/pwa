import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Unsplash, { toJson } from 'unsplash-js';

class App extends Component {
  constructor() {
    super();

    this.unsplash = new Unsplash({
      applicationId: "4a098422636131849a16025acc29c09de726d2d107f4d665a67b1bc617fd6b91",
      secret: "cc7b90fc8f2bfc4664b7cc3a72ad02d6238f6d205ddf16f5fb2cfb32e7b9b462",
    });
  }

  requestToUnsplash = () => {
    this.unsplash.photos.listPhotos(2, 15, "latest")
    .then(toJson)
    .then(json => {
      console.log(json);
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!</h1>
        </header>
        <button
          onClick={this.requestToUnsplash}
          type="button">button</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
