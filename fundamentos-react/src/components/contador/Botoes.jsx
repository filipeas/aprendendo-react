import React from "react";

export const Botoes = props => {
  return (
    <div>
      <button onClick={props.inc}>+</button>
      <button onClick={props.dec}>-</button>
    </div>
  )
}