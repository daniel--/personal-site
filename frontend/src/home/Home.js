import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header>About Me</Header>
      <p>
        Hi, I'm Daniel, a software developer living in Toronto Canada. I'm a
        fullstack web developer fluent in Python and React. I also have
        experience working on high performance scientific computing software.
        Check out more details in my <Link to={"resume"}>resume</Link>.
      </p>
      <p>
        I have a love of game design and development and have participated in
        many <Link to={"game-jams"}>Game Jams</Link> to varying degrees of
        success. You can also play a quick game of{" "}
        <Link to={"meta-tic-tac-toe"}>Meta Tic Tac Toe</Link> right here on my
        website.
      </p>
      <p>
        I have an undergraduate degree in computer-science and physics from the
        University of Toronto and a <Link to={"masters"}>master degree</Link> in
        computer science also from the University of Toronto.
      </p>
      <p>
        My GitHub is <a href="https://github.com/daniel--">here</a>.
      </p>
      <p>
        You can reach me at{" "}
        <a href="mailto:dan.lister@gmail.com">dan.lister@gmail.com</a>.
      </p>
    </>
  );
}
