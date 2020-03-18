import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

//  Components
import Homepage from './pages/homepage/homepage-container';
import Issuepage from './pages/issues/issue-container';
//  Apollo setup
const Client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

//  App
const App = () => {
  return (
    <ApolloProvider client={Client}>
      <Router>
        <div>hello world</div>

        <Route exact path="/" component={Homepage} />
        <Route path="/" component={Issuepage} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
