import React from "react";
import { Header } from "semantic-ui-react";

export default function ThisSite() {
  return (
    <>
      <Header>This Site</Header>
      <p>
        This site is build using <a href="https://reactjs.org/">React</a>. It
        uses purely functional components and the new{" "}
        <a href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a> api.
        It uses <a href="https://react.semantic-ui.com/">Semantic UI React</a>{" "}
        for the interface. It uses{" "}
        <a href="https://reacttraining.com/react-router/web/guides/quick-start">
          React Router
        </a>{" "}
        to manage urls. It is hosted on GitHub pages.
      </p>
    </>
  );
}
