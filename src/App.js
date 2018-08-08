import React, { Component } from 'react';

import Unsplash, { toJson } from 'unsplash-js';

class App extends Component {

  unsplash = new Unsplash({
    applicationId: "4a098422636131849a16025acc29c09de726d2d107f4d665a67b1bc617fd6b91",
    secret: "cc7b90fc8f2bfc4664b7cc3a72ad02d6238f6d205ddf16f5fb2cfb32e7b9b462",
  });

  state = {
    photoUrl: '',
  };

  // ;;life ----------------------------------------------------------------------------------------

  componentDidMount() {
    const photoUrlFromStorage = localStorage.getItem('photoUrl');

    if (photoUrlFromStorage) this.setState({ photoUrl: photoUrlFromStorage });
  }

  // ;;inner ---------------------------------------------------------------------------------------

  requestToUnsplash = () => {
    this.unsplash.photos.getRandomPhoto()
      .then(toJson)
      .then(json => {
        const requestPhotoUrl = json.urls.regular;

        localStorage.setItem('photoUrl', requestPhotoUrl);
        this.setState({ photoUrl: requestPhotoUrl });
      });
  };

  // ;;render --------------------------------------------------------------------------------------

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <button
            className="app__button"
            name="button"
            onClick={this.requestToUnsplash}
            type="button">
            <img
              className="app__logo"
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="" />
          </button>
        </header>
        <div className="app__content">
          <img
            className="app__photo"
            src={this.state.photoUrl}
            alt="" />
        </div>
      </div>
    );
  }
}

export default App;
