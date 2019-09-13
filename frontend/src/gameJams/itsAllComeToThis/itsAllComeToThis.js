import React from "react";

import binary from "./its-all-come-to-this.tar.gz";

const images = require.context("./i", true);

const itsAllComeToThis = {
  name: "It's All Come to This",
  url: "its-all-come-to-this",
  descriptionShort:
    "It's All Come to This is a post apocalyptic worker placement made for TOJam 10.",
  description: (
    <>
      So it Has Come to This was created at TOJam 10 in 2015. So it Has Come to
      This is a post apocalyptic survivor game in the style worker placement
      board games. You must send each of your survivors to a different location
      in order to collect resources and try try to survive. Each day there is a
      new random event that will affect your camp. See how long you can survive
      before you run out of resources.
    </>
  ),
  source: "https://github.com/TeamAwesomeTOJam/soithascometothis",
  download: binary,
  windowsInstructions: (
    <>
      To play on Windows first install{" "}
      <a href="https://www.python.org/ftp/python/2.7.12/python-2.7.12.msi">
        32bit python 2.7
      </a>
      , then <a href="http://pygame.org">pygame</a>, run run.py
    </>
  ),
  linuxInstructions: (
    <>
      To play on Linux install pygame from your package manager, then run
      run.py.
    </>
  ),
  postmortem: (
    <>
      So it Has Come to This is incomplete. The three-day game jam proved to be
      too much for a two person team to implement all the required features,
      especially u.i. features required for this style of game in a relatively
      new engine. Although we got almost all the basic functionality complete we
      didn't have enough time to create almost any content, work on any balance,
      or add any polish. One interesting feature we were able to add is the
      selection of random names for U.S. census data. The main lesson to be
      learned is that working in new engines is tricky and games that require a
      lot of content should not be attempted with a small team at a three-day
      jam.
    </>
  ),
  credits: {
    "Design and Programming": ["Daniel Lister", "Jonathan Doda"],
    Music: ["Chris Pauley"],
    Technology: [
      <a href="https://www.python.org/">Python</a>,
      <a href="http://www.pygame.org">Pygame</a>,
      <a href="https://github.com/TeamAwesomeTOJam/awesomeengine">
        Awesome Engine
      </a>
    ]
  },
  headerImage: "screen1.png",
  images: [
    "screen1.png",
    "screen2.png",
    "screen3.png",
    "screen4.png",
    "screen5.png",
    "screen6.png"
  ],

  getImage: (image, size = "o") => images(`./${size}/${image}`)
};

export default itsAllComeToThis;
