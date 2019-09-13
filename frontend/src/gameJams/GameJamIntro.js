import React from "react";
import { Header, Item } from "semantic-ui-react";
import { Link } from "react-router-dom";
import crazyUber from "./crazyUber/crazyUber";
import GameJamListItem from "./GameJamListItem";
import games from "./games";
import scale from "./scale/scale";
import zombieScrapyard from "./zombieScrapyard/zombieScrapyard";

export default function GameJamIntro({ match }) {
  return (
    <>
      <Header>Game Jams</Header>
      <p>
        This page collects the games that I have worked on at game Jams. For the
        uninitiated, game jams are events where people gather, either online or
        in person, and make games in a short period of time, usually between
        three days and two weeks. Given the time constraints the games are
        usually not fully polished but are often fun and creative. I suggest you
        take a look at <Link to={`${match.path}/${scale.url}`}>Scale</Link>,{" "}
        <Link to={`${match.path}/${crazyUber.url}`}>Crazy Uber</Link>, or{" "}
        <Link to={`${match.path}/${zombieScrapyard.url}`}>
          Zombie Scrapyard
        </Link>
        , for some of my most successful game jam games.
      </p>
      <Item.Group divided>
        {games.map(game => (
          <GameJamListItem key={game.url} game={game} linkRoot={match.path} />
        ))}
      </Item.Group>
    </>
  );
}
