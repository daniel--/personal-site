import React from "react";

import binary from "./after-you.tar.gz";

const images = require.context("./i", true);

const afterYou = {
  name: "After You",
  url: "after-you",
  descriptionShort:
    "After you is a two player psychedelic game of tag made for TOJam 9.",
  description: (
    <>
      After You was created at TOJam 9 in 2014. It is a psychedelic game of tag.
      You are an invisible circle and wherever you go you leave a trail of
      animation that you can hide in. You have several powers that you can use
      to either hide from or track down your opponent, including spawning a fake
      clone of yourself and creating a large patch of your animation to hide in.
    </>
  ),
  source: "https://github.com/TeamAwesomeTOJam/afteryou",
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
      After you can be really fun. There are lots of ways to trick your opponent
      and escape from tricky situations and it can be quite satisfying to track
      down and corner your opponent. There are however a few sticking points.
      There is some disorientation at the start of the round when players are
      trying to figure out who is chasing who. It is impossible to keep the
      different ability cool downs separate and knowing which abilities you have
      at your disposal at any given time is tricky. Overall though it is quite
      enjoyable.
    </>
  ),
  credits: {
    "Design and Programming": ["Daniel Lister", "Jonathan Doda"],
    "Graphics Programming": ["Michael Tao"],
    Art: ["George Wu"],
    Technology: [
      <a href="https://www.python.org/">Python</a>,
      <a href="http://www.pygame.org">Pygame</a>,
      <a href="https://github.com/TeamAwesomeTOJam/awesomeengine">
        Awesome Engine
      </a>
    ]
  },
  headerImage: "After-You.png",
  images: [
    "After-You.png",
    "1.ready.jpg",
    "screen1.png",
    "screen2.png",
    "screen3.png",
    "screen4.png",
    "screen5.png",
    "screen6.png"
  ],

  getImage: (image, size = "o") => images(`./${size}/${image}`)
};

export default afterYou;
