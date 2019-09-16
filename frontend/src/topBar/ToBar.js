import React from "react";
import { Menu, Container, Responsive, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Meta Tic Tac Toe", url: "/meta-tic-tac-toe" },
  { name: "Resume", url: "/resume" },
  { name: "Game Jams", url: "/game-jams" },
  { name: "Masters Degree", url: "/masters" },
  { name: "This Site", url: "/this-site" }
];

export default function TobBar() {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} header to="/">
          Daniel Lister
        </Menu.Item>
        <Responsive {...Responsive.onlyMobile}>
          <Dropdown simple item icon="bars">
            <Dropdown.Menu>
              {menuItems.map(item => (
                <Dropdown.Item key={item.url} as={Link} to={item.url}>
                  {item.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
        {menuItems.map(item => (
          <Responsive key={item.url} minWidth={Responsive.onlyTablet.minWidth}>
            <Menu.Item as={Link} to={item.url}>
              {item.name}
            </Menu.Item>
          </Responsive>
        ))}
      </Container>
    </Menu>
  );
}
