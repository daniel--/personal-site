import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MetaTicTacToe from "./metaTicTacToe/MetaTicTacToe";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./topBar/ToBar";
import Resume from "./resume/Resume";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <Router>
      <TopBar></TopBar>
      <Container text style={{ marginTop: "5em" }}>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/meta-tic-tac-toe">
            <MetaTicTacToe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
