import React from "react";

const images = require.context("./i", true);

const choon = {
  name: "Choon!",
  url: "choon",
  descriptionShort:
    "Choon! is a game about mining cheese on the moon and fighting off mice inspired by MotherLoad made for TOJam 3.",
  description: (
    <>
      Choon was created at TOJam 3 in 208. Inspired by{" "}
      <a href="http://www.miniclip.com/games/motherload/en/">MotherLoad</a>, in
      Choon! you drive a rover with a giant laser and mine the moon for cheese
      while fending off giant mice.
    </>
  ),

  playMessage: (
    <>
      Unfortunatly you can't. All copies of the game have been lost. It was
      developed by passing a svn repository back and forth on a usb stick and
      was only ever online at the TOJam website which doesn't host it anymore.
    </>
  ),
  postmortem: (
    <>
      <p>
        Choon! is a good case of adapting an existing game. It increases the
        pace of the MotherLoad formula with the use of the digging laser,
        aggressive enemies, a quick satisfying shortcut to the surface, and a
        general increase in overall speed.
      </p>
      <p>
        It is very fully featured for a three-day game jam game. It includes an
        infinite procedurally generated world, the mice predict your path when
        jumping, a custom UI, radar, parallax scrolling background, and a
        particle system. I'm actually not sure how we pulled it off at our first
        jam.
      </p>
    </>
  ),
  credits: {
    "Design and Programming": [
      "Daniel Lister",
      "Jonathan Doda",
      "Andrej Karpathy"
    ],
    Art: ["Ian Chan"],
    "Sound and Music": ["Arthur Zaragoza"],
    Technology: [
      <a href="https://www.python.org/">Python</a>,
      <a href="http://www.pygame.org">Pygame</a>
    ]
  },
  headerImage: "choon_title.png",
  extraImage: "choon.gif",
  youtube: "MNyK-VO-mQI",
  images: ["choon_title.png", "choon_Screen1.png", "choon_Screen2.png"],

  getImage: (image, size = "o") => images(`./${image}`)
};

export default choon;
