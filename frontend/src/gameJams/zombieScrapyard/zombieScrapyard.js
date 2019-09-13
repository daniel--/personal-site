import React from "react";

import binary from "./zombie-scrapyard.tar.gz";

const images = require.context("./i", true);

const zombieScrapyard = {
  name: "Zombie Scrapyard",
  url: "zombie-scrapyard",
  descriptionShort:
    "Zombie Scrapyard is an (un)cooperative game survival game made for TOJam 8.",
  description: (
    <>
      Zombie Scrapyard was created at TOJam 8 in 2013. The theme was
      uncooperative, this inspired us to make a co-op/competitive game in the
      style of The Legend of Zelda: Four Swords Adventures, where players are
      forced to work together to succeed but there is still only one winner. In
      Zombie Scrapyard you must work with your friends to collect the pieces to
      repair your car, but only the person who brings the last part can escape.
      Players have no defence against the zombies and must work together, only
      player luring the zombies away while the other collects the car parts.
    </>
  ),
  source: "https://github.com/TeamAwesomeTOJam/uncooperative",
  download: binary,
  windowsInstructions: (
    <>
      To play on Windows first install{" "}
      <a href="https://www.python.org/ftp/python/2.7.12/python-2.7.12.msi">
        32bit python 2.7
      </a>
      , then <a href="http://pygame.org">pygame</a>, run startgame.py
    </>
  ),
  linuxInstructions: (
    <>
      To play on Linux install pygame from your package manager, then run
      startgame.py.
    </>
  ),
  postmortem: (
    <>
      <p>
        While the gameplay is satisfactory there isn't much depth to it. The
        co-operative vs. competitive element is interesting but the surrounding
        gameplay is fairly simple and not enough to maintain interest.
      </p>
      <p>
        The development of Zombie Scrapyard was difficult. It was the first time
        we used the Awesome Engine we developed for rapid prototyping at game
        jams and it was also the largest team we have had at a game jam. These
        two factors made development difficult but we managed to pull things
        together by the three day deadline. We had to learn how to use our own
        engine and add features to it on the fly. One of the more satisfying
        moments was late in development when we managed to make a three-fold
        increase in the frame rate.
      </p>
    </>
  ),
  credits: {
    "Design and Programming": [
      "Daniel Lister",
      "Jonathan Doda",
      "Nishkala Balakrishan",
      "Jennifer Ruttan",
      "Michael Tao"
    ],
    Music: ["Remy Perrin"],
    Art: ["Eric Kim"],
    Technology: [
      <a href="https://www.python.org/">Python</a>,
      <a href="http://www.pygame.org">Pygame</a>
    ]
  },
  headerImage: "TitleScreen00.png",
  images: [
    "TitleScreen00.png",
    "Screenshot1.png",
    "Screenshot4.png",
    "Screenshot2.png",
    "Screenshot3.png"
  ],

  getImage: (image, size = "o") => images(`./${size}/${image}`)
};

export default zombieScrapyard;
