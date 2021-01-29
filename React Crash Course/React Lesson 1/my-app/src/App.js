import React, { Component } from "react";

function FunctionComponent() {
  return <h1>This is a function component</h1>;
}

class ClassComponent extends Component {
  render() {
    return <h1>This is a class component</h1>;
  }
}

function handleEvent(e) {
  alert("Button Clicked");
  console.log(e);
}

function App() {
  return (
    <div className="App">
      <FunctionComponent />
      <ClassComponent />
      <button onClick={handleEvent}>Test Click</button>
    </div>
  );
}

export default App;
