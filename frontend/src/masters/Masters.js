import React from "react";
import { Header } from "semantic-ui-react";

import thesisPdf from "./thesis.pdf";
import SimplePdfView from "../simplePdfView/SimplePdfView";

export default function Masters() {
  return (
    <>
      <Header>Masters Degree</Header>
      <p>
        I completed my Master of Science Degree from the University of Toronto
        in 2012. I was a member of the Computer Science{" "}
        <a href="http://www.cs.toronto.edu/theory/">Theory Group</a> and my
        advisors were{" "}
        <a href="http://www.cs.cornell.edu/annual_report/toueg.htm">
          Sam Toueg
        </a>{" "}
        and <a href="http://www.cs.toronto.edu/%7Evassos/">Vassos Hadzilacos</a>
        . My research was in Theory of{" "}
        <a href="https://en.wikipedia.org/wiki/Distributed_computing">
          Distributed Computing
        </a>
        .
      </p>
      <Header>Thesis</Header>
      <p>
        My thesis, titled A Pedagogical Presentation of the BG-Simulation,
        concerns the{" "}
        <a href="http://groups.csail.mit.edu/tds/papers/Borowsky/TM-573.pdf">
          BG-Simulation
        </a>
        , an important result in theory of distributed computing. It shows that{" "}
        <i>f + 1</i> processors, <i>f</i> of which may fail can simulate a
        larger number of processors of which at most <i>f</i> will fail. The
        original presentation of the BG-Simulation was quite complex and
        difficult to understand. My thesis presents a new proof of the
        BG-Simulation designed specifically to be easily understood.
      </p>
      <SimplePdfView file={thesisPdf}></SimplePdfView>
    </>
  );
}
