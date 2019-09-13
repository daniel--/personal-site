import React from "react";
import { Switch, Route } from "react-router-dom";
import GameJamIntro from "./GameJamIntro";
import GamePage from "./GamePage";

import games from "./games";

export default function GameJams({ match }) {
  return (
    <Switch>
      <Route exact path={match.path} component={GameJamIntro}></Route>
      {games.map(game => (
        <Route
          key={game.url}
          path={`${match.path}/${game.url}`}
          render={() => <GamePage game={game} />}
        />
      ))}
    </Switch>
  );
}
