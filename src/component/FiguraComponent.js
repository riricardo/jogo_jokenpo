import React from 'react';
import {Image} from 'react-native';

const pedra = require('./../img/pedra.png');
const papel = require('./../img/papel.png');
const tesoura = require('./../img/tesoura.png');

// Podemos passar informacoes utilizando o props
// e com ele podemos definir ou compartilhar informacoes
const FiguraComponent = props => {
  if (props.nome === 'PEDRA') {
    return <Image source={pedra} />;
  } else if (props.nome === 'PAPEL') {
    return <Image source={papel} />;
  } else if (props.nome === 'TESOURA') {
    return <Image source={tesoura} />;
  } else {
    return <></>;
  }
};

export default FiguraComponent;
