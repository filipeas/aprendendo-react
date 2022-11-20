import React, { useState } from "react";
import { GeraMega } from '../../data/mega';

export const Mega = props => {
  const [numero, setNumero] = useState(7);
  const [arr, setArr] = useState(0);
  return (
    <div>
      <h2>Números do mega</h2>
      <h3>Quantidade a ser gerada: {numero}</h3>
      <input type="number"
        onChange={e => setNumero(e.target.value)}
      />
      <button onClick={e => setArr(GeraMega(numero))}>Gerar</button>
      <h4>[{arr.map((num, i) => num + (i < arr.length - 1 ? ' - ' : ''))}]</h4>
    </div>
  )
}