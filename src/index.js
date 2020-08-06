import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import CardComponent from "./CardComponent";
const App = () => {
  return (
    <div>
      <CardComponent>
        <CommentDetails name="Faran"></CommentDetails>
      </CardComponent>
    </div>
  );
};
ReactDOM.render(<App></App>, document.getElementById("root"));
