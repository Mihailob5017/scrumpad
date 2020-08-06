import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

//  Components
import Homepage from "./pages/homepage/homepage-container";
import Issuepage from "./pages/issues/issue-container";
import Addpage from "./pages/add/addpage";
import Header from "./components/header/header";
//  Apollo setup
const Client = new ApolloClient({
  uri: "https://scrumpad-backend.herokuapp.com/graphql",
});

//  App
const App = () => {
  return (
    <ApolloProvider client={Client}>
      <Router>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/issues" component={Issuepage} />
        <Route path="/add" component={Addpage} />
      </Router>
    </ApolloProvider>
  );
};

export default App;
