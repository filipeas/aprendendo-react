import React from "react";

export const IndiretaFilho = props => {
  const gerarIdade = () => parseInt(Math.random() * (100 - 50)) + 50;
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>
        Filho
      </div>

      <button onClick={
        e => {
          props.quandoClicar('Pai', gerarIdade(), gerarNerd())
        }
      }>Fornecer Informações</button>
    </div>
  )
}