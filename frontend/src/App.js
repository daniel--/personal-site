import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import MetaTicTacToe from "./metaTicTacToe/MetaTicTacToe";
import { Container, Segment } from "semantic-ui-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import TopBar from "./topBar/ToBar";
import Resume from "./resume/Resume";

import { pdfjs } from "react-pdf";
import Masters from "./masters/Masters";
import GameJams from "./gameJams/GameJams";
import "react-alice-carousel/lib/alice-carousel.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ScrollToTopUnWrapped({ history }) {
  useEffect(() => {
    const unlisten = history.listen(location => {
      if (location.action === "POP") {
        return;
      }
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}

const ScrollToTop = withRouter(ScrollToTopUnWrapped);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TopBar />
      <Container text style={{ marginTop: "5em", flex: 1 }}>
        <Switch>
          <Route exact path="/" />
          <Route path="/meta-tic-tac-toe" component={MetaTicTacToe} />
          <Route path="/resume" component={Resume} />
          <Route path="/masters" component={Masters} />
          <Route path="/game-jams" component={GameJams} />
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
