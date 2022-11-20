import React from "react"
import produtos from '../../data/produtos';

export default props => {
  const table = produtos.map(produto => {
    return (
      <tr>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    );
  })
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>NOME</th>
          <th>PREÇO</th>
        </tr>
        {table}
      </table>
    </div>
  )
}