import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Sabin Dev is Here"
);
const jsxHeading = (
  <h1 id="heading" tabIndex="5">
    Sabin Dev using JSX
  </h1>
);
const Title = () => <h1 className="head">This is Title component</h1>;
const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    {Title()}
    <Title />
    <Title></Title>

    <h1>This is a React functional component </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
