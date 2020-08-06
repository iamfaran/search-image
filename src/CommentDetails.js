import React from "react";

const CommentDetails = (props) => {
  return (
    <div className="box">
      <h1 className="name"> Name: {props.name}</h1>
      <h2 className="age">Age:</h2>
    </div>
  );
};

export default CommentDetails;
