import React from "react";

import binary from "./progger.tar.gz";

const images = require.context("./i", true);

const progger = {
  name: "Progger",
  url: "progger",
  descriptionShort:
    "Progger is a physics puzzle game made for the 2008 U of T Game Design and Development Club Game Making Deathmatch.",
  description: (
    <>
      Progger was made for the 2008 U of T Game Design and Development Club Game
      Making Deathmatch. In it you play a giant space faring frog trying to
      reach earth. To accomplish this you will hitch a ride on the gravity wells
      of other planets and orbiting space potatoes. This odd combination comes
      from the theme of the jam: Planet Earth and Frogs with Potatoes on the
      side.
    </>
  ),
  source: "https://github.com/daniel--/progger",
  download: binary,
  windowsInstructions: (
    <>
      To play on Windows first install{" "}
      <a href="https://www.python.org/ftp/python/2.7.12/python-2.7.12.msi">
        32bit python 2.7
      </a>
      , then <a href="http://pygame.org">pygame</a>, run main.py
    </>
  ),
  linuxInstructions: (
    <>
      To play on Linux install pygame from your package manager, then run
      main.py.
    </>
  ),
  reception: (
    <>
      The game was fairly well received. It won Adherence to Theme and placed
      third Overall in the Game Making Deathmatch. You can see a review{" "}
      <a href="http://gmd.utgddc.com/2008/gmd-2008-game-reviews/progger/">
        here
      </a>
      .
    </>
  ),
  postmortem: (
    <>
      Progger is a pretty fun game. Navigating the gravity of the planets and
      grabbing onto the potatoes makes for an interesting combination of puzzle
      and execution skill. Some of the levels are probably overly difficutly and
      usually solved by brute force repition. One change that should probably be
      made is to the jump power. Currently it is based on the length of time the
      button is pressed. This would work fine in a more action oriented game but
      this is a more puzzle oriented game and timing the jump power can be
      frustrating.
    </>
  ),
  credits: {
    "Design and Programming": ["Daniel Lister", "Andrej Karpathy"],
    Technology: [
      <a href="https://www.python.org/">Python</a>,
      <a href="http://www.pygame.org">Pygame</a>
    ]
  },
  headerImage: "progger1.png",
  images: [
    "progger1.png",
    "progger2.png",
    "progger3.png",
    "progger4.png",
    "progger5.png",
    "progger6.png"
  ],

  getImage: (image, size = "o") => images(`./${size}/${image}`)
};

export default progger;
