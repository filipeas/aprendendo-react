import React from "react";

export default function Aleatorio(props) {
  const num = Math.random() * (props.max - props.min) + props.min;
  return (
    <div>
      <h3>Número Aleatorio: {num}</h3>
    </div>
  )
}