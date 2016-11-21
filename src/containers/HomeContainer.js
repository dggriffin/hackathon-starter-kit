import React from 'react';
import HomeView from '../components/HomeView';
import config from 'config';

const Rebase = require('re-base');
const base = Rebase.createClass({
      apiKey: config.firebaseApiKey,
      authDomain: config.firebaseAuthDomain,
      databaseURL: config.firebaseDatabaseURL,
      storageBucket: config.firebaseStorageBucket
});

class HomeContainer extends React.Component {
  render() {
    return (<HomeView/>);
  }
}

HomeContainer.defaultProps = {
};

export default HomeContainer;
