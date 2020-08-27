import React from "react";

export default function box(props) {
  return (
    <div
      onClick={() => {
        props.colorChange(props.index);
      }}
      className={props.color}
    ></div>
  );
}
