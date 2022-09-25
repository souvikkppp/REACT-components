import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div>
      <Heading />
      {/*here we need <Heading speace /> to give space part of jsx style*/}
      <List />
    </div>
  );
}

export default App;
