import React from "react";

import binary from "./fall.tar.gz";
import { Link } from "react-router-dom";

const images = require.context("./i", true);

const fall = {
  name: "Fall",
  url: "fall",
  descriptionShort:
    "Fall is a gravity twisting puzzle platformer made for TOJam 6.",
  description: (
    <>
      Fall was created at TOJam 6 in 2011. It is a physics based puzzle
      platformer. You must work your way to the level exit by navigating
      changing gravity fields and dodging deadly hazards. There are collectible
      dots, and floating particles in the gravity fields to help you navigate.
      It also includes a level editor so you can make your own levels.
    </>
  ),
  source: "https://github.com/TeamAwesomeTOJam/fall",
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
  postmortem: (
    <>
      <p>
        Fall is pretty fun, the platforming feels good and the levels are
        challenging and satisfying to complete. There are however a couple of
        flaws. It is difficult to know where the boundaries of the altered
        gravity fields are. The floating particles are designed to help with
        this, and they are visually pleasing, however they don't do a perfect
        job. Another solution could be to draw a vector field for the gravity.
      </p>
      <p>
        There is also an issue with the controls when transitioning to an
        opposite gravity field. If the controls are relative to the screen then
        when making an upside u-turn the player wants to keep holding the same
        direction, but will end up bouncing back and forth. If the controls are
        relative to the player then when entering an upside down gravity field
        the player will reverse direction unintentionally. We tried to solve
        this by using a combination and changing in a smart way, however it
        doesn't work perfectly and the player will occasionally keep switching
        directions while holding one movement button.
      </p>
      <p>
        Fall introduced the stick man animation system later used in{" "}
        <Link to="winter-wizard-jam">Winter Wizard Jam</Link>.
      </p>
    </>
  ),
  credits: {
    "Design and Programming": ["Daniel Lister", "Jonathan Doda", "Michael Tao"],
    "Sound and Music": ["Troy Morrissey"],
    Technology: [
      <a href="https://www.python.org/">Python</a>,
      <a href="http://www.pygame.org">Pygame</a>,
      <a href="http://www.pymunk.org/">Pymunk</a>
    ]
  },
  headerImage: "screen1.png",
  images: [
    "screen1.png",
    "screen2.png",
    "screen3.png",
    "screen4.png",
    "screen5.png",
    "screen6.png",
    "screen7.png",
    "screen8.png"
  ],

  getImage: (image, size = "o") => images(`./${size}/${image}`)
};

export default fall;
