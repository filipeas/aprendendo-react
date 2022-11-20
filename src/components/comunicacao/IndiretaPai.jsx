import React, { useState } from "react";
import { IndiretaFilho } from "./IndiretaFilho";

export const IndiretaPai = props => {
  const [nome, setNome] = useState('?');
  let [idade, setIdade] = useState(0);
  let [nerd, setNerd] = useState(false);

  function fornecerInfo(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span>{nome}</span>
        <span> {idade}</span>
        <span> {nerd ? 'Verdadeiro' : 'Falso'}</span>
      </div>

      <IndiretaFilho quandoClicar={fornecerInfo}></IndiretaFilho>
    </div>
  )
}