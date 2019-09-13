import React from "react";
import {
  Header,
  Divider,
  Icon,
  Button,
  List,
  Image,
  Embed
} from "semantic-ui-react";
import AliceCarousel from "react-alice-carousel";

export default function GamePage({ game }) {
  return (
    <>
      <Header>{game.name}</Header>
      {game.extraImage && (
        <>
          <Image src={game.getImage(game.extraImage)} />
          <Divider hidden />
        </>
      )}
      <p>{game.description}</p>
      {game.youtube && (
        <>
          <Embed id={game.youtube} source="youtube" />
          <Divider hidden />
        </>
      )}
      {game.reception && (
        <>
          <Header>Reception</Header>
          <p>{game.reception}</p>
          <Divider hidden />
        </>
      )}
      <Divider hidden />
      <AliceCarousel
        autoPlayInterval={5000}
        autoPlay
        disableAutoPlayOnAction
        items={game.images.map(image => (
          <Image centered key="image" size="huge" src={game.getImage(image)} />
        ))}
      />
      <Divider hidden />
      <Header>Play It</Header>
      {game.playMessage && <p>{game.playMessage}</p>}
      {game.windowsInstructions && (
        <p>
          <Icon name="windows" />
          {game.windowsInstructions}
        </p>
      )}
      {game.linuxInstructions && (
        <p>
          <Icon name="linux" />
          {game.linuxInstructions}
        </p>
      )}
      {game.source && (
        <Button icon as="a" href={game.source}>
          <Icon name="github" />
          Source
        </Button>
      )}
      {game.download && (
        <Button as="a" href={game.download}>
          Archive
        </Button>
      )}
      <Divider hidden />
      <Header>Postmortem</Header>
      <p>{game.postmortem}</p>
      <Divider hidden />
      <Header>Credits</Header>
      <List>
        {Object.keys(game.credits).map(title => (
          <List.Item key={title}>
            {title}
            <List.List>
              {game.credits[title].map((name, i) => (
                <List.Item key={i}>{name}</List.Item>
              ))}
            </List.List>
          </List.Item>
        ))}
      </List>
    </>
  );
}
