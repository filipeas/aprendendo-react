import React from "react";

import './App.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import { IndiretaPai } from "./components/comunicacao/IndiretaPai";
import { Input } from "./components/formulatio/Input";
import Contador from "./components/contador/Contador";
import { Mega } from "./components/mega/Mega";

export const App = (_) => (
  <div className="App">
    <h1>Fundamentos React reduzido</h1>

    <div className="Cards">
      <Card
        titulo="Mega"
        color="#242424">
        <Mega />
      </Card>
      <Card
        titulo="Contador"
        color="#424242">
        <Contador numeroInicial={120} />
      </Card>
      <Card
        titulo="componente controlado"
        color="#E45FFF">
        <Input />
      </Card>
      <Card
        titulo="comunicacao indireta"
        color="#8BAD39">
        <IndiretaPai />
      </Card>
      <Card
        titulo="comunicacao direta"
        color="#59323C">
        <DiretaPai />
      </Card>
      <Card
        titulo="Par ou Impar"
        color="#982395">
        <ParOuImpar numero={11} />
        <UsuarioInfo usuario={{ nome: 'Filipe' }} />
      </Card>
      <Card
        titulo="Tabela de Produtos"
        color="#008">
        <TabelaProdutos />
      </Card>
      <Card
        titulo="Repetição"
        color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card
        titulo="Componente com filhor"
        color="#090">
        <Familia sobrenome="Sampaio">
          <FamiliaMembro nome="Filipe" />
          <FamiliaMembro nome="Carol" />
        </Familia>
      </Card>
      <Card
        titulo="Primeiro componente"
        color="#FA6900">
        <Primeiro></Primeiro>
      </Card>
      <Card
        titulo="Segundo componente"
        color="#E8B71A">
        <ComParametro
          titulo="Segundo componente"
          aluno="Filipe"
          nota={10} />
      </Card>
      <Card
        titulo="Com parametro #2">
        <ComParametro
          titulo="Segundo componente"
          aluno="Amanda"
          nota={8} />
      </Card>
      <Card
        titulo="fagmento">
        <Fragmento />
      </Card>
      <Card
        titulo="Aleatorio 1">
        <Aleatorio
          max={1}
          min={999} />
      </Card>
      <Card
        titulo="Desafio Aleatório">
        <Aleatorio
          max={1}
          min={999} />
      </Card>
      <Card
        titulo="Fragmento">
        <Aleatorio
          max={1}
          min={999} />
      </Card>
      <Card
        titulo="mais de um filho">
        <Aleatorio
          max={1}
          min={999} />
        <Primeiro />
      </Card>
    </div>
  </div>
);