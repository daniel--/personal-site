import React from "react";
import { Header } from "semantic-ui-react";

import resumePdf from "./resume.pdf";
import SimplePdfView from "../simplePdfView/SimplePdfView";

export default function Resume() {
  return (
    <>
      <Header>Resume</Header>
      <SimplePdfView file={resumePdf}></SimplePdfView>
    </>
  );
}
