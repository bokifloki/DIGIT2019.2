import React from "react";
import { navigate } from "@reach/router";

const buttonStyle = {
  selfAlign: "center"
};

const mainDiv = {
  padding: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
};

function Button({ text }) {
  return <button style={buttonStyle}>{text}</button>;
}

function PageNotFound() {
  return (
    <div>
      <div style={mainDiv}>
        <h1>404</h1>
        <h3>Страната што ја побаравте не постои.</h3>
        <Button text="Врати се на Homepage"></Button>
      </div>
    </div>
  );
}

export default PageNotFound;
