import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function TobBar() {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} header to="/">
          Daniel Lister
        </Menu.Item>
        <Menu.Item as={Link} to="/meta-tic-tac-toe">
          Meta Tic Tac Toe
        </Menu.Item>
        <Menu.Item as={Link} to="/resume">
          Resume
        </Menu.Item>
        <Menu.Item as={Link} to="/game-jams">
          Game Jams
        </Menu.Item>
        <Menu.Item as={Link} to="/masters">
          Masters Degree
        </Menu.Item>
        <Menu.Item as={Link} to="/this-site">
          This Site
        </Menu.Item>
      </Container>
    </Menu>
  );
}
