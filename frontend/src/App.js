import React from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MetaTicTacToe from "./metaTicTacToe/MetaTicTacToe";
import { Container, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./topBar/ToBar";
import Resume from "./resume/Resume";
import ScrollToTop from "./ScrollToTop";

import { pdfjs } from "react-pdf";
import Masters from "./masters/Masters";
import GameJams from "./gameJams/GameJams";
import "react-alice-carousel/lib/alice-carousel.css";
import DocumentTitle from "./DocumentTitle";
import Home from "./home/Home";
import ThisSite from "./thisSite/ThisSite";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <DocumentTitle />
      <TopBar />
      <Container text style={{ marginTop: "5em", flex: 1 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/meta-tic-tac-toe" component={MetaTicTacToe} />
          <Route path="/resume" component={Resume} />
          <Route path="/masters" component={Masters} />
          <Route path="/game-jams" component={GameJams} />
          <Route path="/this-site" component={ThisSite} />
        </Switch>
      </Container>
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      />
    </Router>
  );
}

export default App;
