import React from "react";

import binary from "./scale.tar.gz";

const images = require.context("./i", true);

const scale = {
  name: "Scale",
  url: "scale",
  descriptionShort:
    "Scale is a puzzle platformer all about changing your size made for TOJam 4.",
  description: (
    <>
      Scale was created at TOJam 4 in 2009. The theme for the jam was scale. The
      theme lead us to the idea of a puzzle platformer where the primary
      mechanic is the ability to change the scale of the world in a dramatic
      way. The surprise of shrinking down to fit under a wall only to find an
      entire section of platforming in what looked like a crack is a unique
      experience. Due to time limitations (it was created in two days) we used a
      physics engine to drive the gameplay and many of the puzzles. While this
      allowed for some interesting puzzles many players find it tricky to play a
      platformer that does not allow for mid-air changes in direction. Overall
      this the game was quite successful (It won best use of theme) and is the
      favorite game of those I have worked on.
    </>
  ),
  source: "https://github.com/TeamAwesomeTOJam/Scale",
  download: binary,
  windowsInstructions: (
    <>
      To play on Windows first install{" "}
      <a href="https://www.python.org/ftp/python/2.7.12/python-2.7.12.msi">
        32bit python 2.7
      </a>
      , then <a href="http://pygame.org">pygame</a>, finally run main.py
    </>
  ),
  linuxInstructions: (
    <>
      Unfortunatly the version of pymunk included is only compiled for 32-bit
      windows and Linux. If anyone can find the chipmunk source required to
      compile for 64-bit it would be greatly appreciated.
      <p>
        For this reason, I haven't run the game on Linux since it was developed,
        but it should be enough to install pygame from your package manager and
        run main.py.
      </p>
    </>
  ),
  reception: (
    <>
      The game was quite well received. It won best use of theme at the TOJam
      arcade. You can see favorable reviews on its TOJam page{" "}
      <a href="http://www.tojam.ca/games_2009/scale.asp">here</a>, and The Art
      of Game{" "}
      <a href="https://artofgame.wordpress.com/2009/08/18/the-games-of-tojam-4-part-8/">
        here
      </a>
      .
    </>
  ),
  postmortem: (
    <>
      <p>
        There were originally plans to include other mechanics involving enemies
        and obstacles and other puzzle elements that would make interesting use
        of the scaling mechanic however the tighter than usual deadline (Scale
        was made in 1.5 days rather than the usual 3 for TOJam) prevented their
        implementation. I believe this ultimately benefited the game. With only
        enough time to implement the core scaling mechanic the game has a fucus
        and consistency that would not likely have been achieved in a game jam.
        That said I believe there is a lot of potential space to explore and the
        game could be fleshed out into a fully fledged platformer
      </p>
      <p>
        The one area that didn't work as well as hoped is the physics engine.
        While it allowed for a quick development and some interesting puzzles,
        many players found it frustrating. People are used to the standard Mario
        style platformer physics where movement in the air is under player
        control. Our implementation lacks this, opting instead for a realistic
        model where once you have left the ground your trajectory is determined.
        It would require a redesign of many of the puzzles but the game would
        most likely benefit from a standard platformer physics implementation.
      </p>
    </>
  ),
  credits: {
    "Design and Programming": ["Daniel Lister", "Andrej Karpathy"],
    Technology: [
      <a href="https://www.python.org/">Python</a>,
      <a href="http://www.pygame.org">Pygame</a>,
      <a href="http://www.pymunk.org/">Pymunk</a>
    ]
  },
  headerImage: "introscr.jpg",
  extraImage: "SCALE.gif",
  youtube: "mcL1n7a90rQ",
  images: [
    "introscr.jpg",
    "zoom.png",
    "scale1.png",
    "scale2.png",
    "scale3.png",
    "scale4.png",
    "scale5.png"
  ],

  getImage: (image, size = "o") => images(`./${size}/${image}`)
};

export default scale;
