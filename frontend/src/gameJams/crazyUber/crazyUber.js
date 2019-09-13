import React from "react";

import binary from "./crazy-uber.tar.gz";

const images = require.context("./i", true);

const crazyUber = {
  name: "Crazy Uber",
  url: "crazy-uber",
  descriptionShort:
    "Crazy Uber is a physics driving game inspired by Crazy Taxi made for TOJam 11.",
  description: (
    <>
      Crazy Uber was created at TOJam 11 in 2016. Inspired by Crazy Taxi and the
      real life conflict between Uber and taxi companies, Crazy Uber is a top
      down arcade style driving game where you try to pick up and drop off fares
      while dodging angry taxi drivers. Forcing your way through a pack of angry
      taxi drivers to drop off a passenger just before they get angry and leave
      makes for some satisfying gameplay.
    </>
  ),
  source: "https://github.com/TeamAwesomeTOJam/CrazyUber",
  download: binary,
  windowsInstructions:
    "To play on Windows simply install the windows build and run.",
  linuxInstructions: (
    <>
      To play on Linux install{" "}
      <a href="https://github.com/jdoda/sdl2hl">sdl2hl</a>,{" "}
      <a href="https://github.com/jdoda/sdl2-cffi">sdl2-cffi</a>, the{" "}
      <a href="https://github.com/TeamAwesomeTOJam/awesomeengine/tree/legacy">
        Awesome Engine legacy branch
      </a>{" "}
      and <a href="https://github.com/pybox2d/pybox2d">pybox2d</a>, then run
      main.py.
    </>
  ),
  postmortem: (
    <>
      Overall Crazy Uber was quite successful, the physics cars are quite
      satisfying to drive and crash and the swarming taxi's make for a fun
      challenge. There is some work that should be done to clean up the ui and
      fix some of the neutral car ai. The building art was done with an
      extremely short deadline and should the perspective should be redone in
      the style of GTA 1 and 2. The largest difficulty experienced by players is
      controlling the car when driving downwards, I don't think there is a good
      solution to this. We tried fixing the camera to the car but this induced
      disorientation and motion sickness.
    </>
  ),
  credits: {
    "Design and Programming": ["Daniel Lister", "Jonathan Doda"],
    "Sound and Music": ["Chris Pauley"],
    Art: ["Robert Lopatto"],
    Technology: [
      <a href="https://www.python.org/">Python</a>,
      <a href="https://github.com/pybox2d/pybox2d">Pybox2d</a>,
      <a href="https://github.com/TeamAwesomeTOJam/awesomeengine">
        Awesome Engine
      </a>
    ]
  },
  headerImage: "Title.png",
  images: [
    "Title.png",
    "Screenshot1.png",
    "zoom.png",
    "Screenshot2.png",
    "Screenshot3.png",
    "Screenshot4.png",
    "Screenshot5.png",
    "Screenshot6.png"
  ],

  getImage: (image, size = "o") => images(`./${size}/${image}`)
};

export default crazyUber;
