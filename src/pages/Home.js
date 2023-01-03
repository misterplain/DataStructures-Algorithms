import React, { useEffect } from "react";
import PrismCode from "../components/PrismCode";

const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;

const htmlCode = `
    <div>
      <h1> PrismJS Tutorial </h1>
      <p>
      Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
      </p>
    </div>
`;


const Home = () => {


  return (
    <div>
      <PrismCode code={JSCode} language="javascript" />
      <PrismCode code={htmlCode} language="html" />
    </div>
  )
}

export default Home