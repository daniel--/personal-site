import React from "react";
import "semantic-ui-css/semantic.min.css";

import "./App.css";
import MetaTicTacToe from "./metaTicTacToe/MetaTicTacToe";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <Container>
      <MetaTicTacToe />
    </Container>
  );
}

export default App;
