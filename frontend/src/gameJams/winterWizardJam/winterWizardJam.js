import React from "react";

import binary from "./winter-wizard-jam.tar.gz";

const images = require.context("./i", true);

const winterWizardJam = {
  name: "Winter Wizard Jam",
  url: "winter-wizard-jam",
  descriptionShort:
    "Winter Wizard Jam is a kite powered line rider made for the Winter Wizard Jam.",
  description: (
    <>
      Winter Wizard Jam was made for the Idle Thumbs Winter Wizard Jam in 2015.
      We never came up with an actual name for it but Winter Wizard Jam has a
      certain ring to it. Inspired by learning to kite board and line rider
      games like Tiny Wings, in Winter Wizard Jam you are pulled up a snowy hill
      by a kite to compete for the best time. There is a daily challenge course,
      daily leaderboard, and you can download a replay of the top time to
      compare yourself against.
    </>
  ),
  source: "https://github.com/TeamAwesomeTOJam/winterwizardjam",
  download: binary,
  windowsInstructions: "Unfortunately there is no windows build available.",
  linuxInstructions: (
    <>
      To play on Linux install my fork of{" "}
      <a href="https://github.com/daniel--/sdl2-cffi">sdl2cffi</a>,{" "}
      <a href="https://github.com/jdoda/sdl2hl">sdl2hl</a>, and the legacy
      branch of{" "}
      <a href="https://github.com/TeamAwesomeTOJam/awesomeengine/tree/legacy">
        Awesome Engine
      </a>
      . Finally install Winter Wizard Jam.
    </>
  ),
  postmortem: (
    <>
      <p>
        Winter Wizard Jam offers a challenging take on the line rider genre.
        It's difficulty, short length, quick restarts, online leaderboard, and
        ghost racing combine to provide an addicting desire to get the perfect
        run.
      </p>
      <p>
        The main lessons learned while working on Winter Wizard Jam had to do
        with the engine. We never actually submitted it to the jam because We
        couldn't get it running on Windows. The engine still needs substantial
        work to become stable and truly multi platform.
      </p>
    </>
  ),
  credits: {
    "Design and Programming": ["Daniel Lister", "Jonathan Doda"],
    Technology: [
      <a href="https://www.python.org/">Python</a>,
      <a href="https://github.com/TeamAwesomeTOJam/awesomeengine">
        Awesome Engine
      </a>
    ]
  },
  headerImage: "winterwizardjam.png",
  images: [
    "winterwizardjam.png",
    "screenshot1.png",
    "screenshot2.png",
    "screenshot3.png",
    "screenshot4.png",
    "screenshot5.png",
    "screenshot6.png",
    "screenshot7.png"
  ],

  getImage: (image, size = "o") => images(`./${size}/${image}`)
};

export default winterWizardJam;
