import React from "react";
import { Item, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function GameJamListItem({ game, linkRoot }) {
  return (
    <Item as={Link} to={`${linkRoot}/${game.url}`}>
      <Image src={game.getImage(game.headerImage, "s")} wrapped ui={false} />

      <Item.Content>
        <Item.Header>{game.name}</Item.Header>
        <Item.Description>{game.descriptionShort}</Item.Description>
      </Item.Content>
    </Item>
  );
}
