import React from "react";

import binary from "./mad-science.tar.gz";

const images = require.context("./i", true);

const madScience = {
  name: "Mad Science",
  url: "mad-science",
  descriptionShort:
    "Mad Science is an action puzzle game all about light made for TOJam 5.",
  description: (
    <>
      Mad Science was created at TOJam 5 in 2010. In Mad Science you play as a
      researcher trapped in another dimension, who must guide and protect their
      assistant in the effort to return home. You exist in a separate dimension
      but you emit light into the real world. Your assistant is attracted to the
      light and monsters are afraid of it. Your light slowly fades and must be
      refreshed at sources. If you leave your assistant alone in the dark they
      are likely to be eaten by monsters. Your goal is to guide and protect your
      assistant through various puzzles and obstacles.
    </>
  ),
  source: "https://github.com/TeamAwesomeTOJam/missing",
  download: binary,
  windowsInstructions: (
    <>
      To play on Windows first install{" "}
      <a href="https://www.python.org/ftp/python/2.7.12/python-2.7.12.msi">
        32bit python 2.7
      </a>
      , then <a href="http://pygame.org">pygame</a>, run runmadscience.py
    </>
  ),
  linuxInstructions: (
    <>
      To play on Linux install pygame from your package manager, then run
      runmadscience.py.
    </>
  ),
  postmortem: (
    <>
      The original design for Mad Science proved to be too much to complete in
      the three-day limit of the game jam. While the basic functionality was
      implemented, gameplay was never satisfying and no real levels were
      completed. There were however a few successes in Mad Science. The lighting
      system worked well, and the animations and sprites were excellent.
    </>
  ),
  credits: {
    "Design and Programming": [
      "Daniel Lister",
      "Jonathan Doda",
      "Nishkala Balakrishan"
    ],
    Art: ["Jared Smith", "Adam Beardsley"],
    Sound: ["Alexander Ballis"],
    Music: ["Janal Bechthold"],
    Technology: [
      <a href="https://www.python.org/">Python</a>,
      <a href="http://www.pygame.org">Pygame</a>
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

export default madScience;
