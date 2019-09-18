import React, {useState} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

import {Logo} from './component/Logo';
import BotaoComponent from './component/BotaoComponent';
import FiguraComponent from './component/FiguraComponent';

const jokenPo = (escolhaUsuario, fim, setFim) => {
  const opcao = ['PEDRA', 'PAPEL', 'TESOURA'];
  const escolhaMaquina = opcao[Math.floor(Math.random() * opcao.length)];

  let resultado = null;

  if (escolhaMaquina === escolhaUsuario) {
    resultado = 'Empatou!';
  } else if (
    (escolhaMaquina === 'PEDRA' && escolhaUsuario === 'TESOURA') ||
    (escolhaMaquina === 'PAPEL' && escolhaUsuario === 'PEDRA') ||
    (escolhaMaquina === 'TESOURA' && escolhaUsuario === 'PAPEL')
  ) {
    resultado = 'Você Perdeu!';
  } else {
    resultado = 'Você Ganhou!';
  }

  setFim({
    escolhaMaquina,
    escolhaUsuario,
    resultado,
  });
};

const App = () => {
  // Utilizando o hooks (useState) ele serve para setar e obter
  // os valores que precisamos escutar ou monitorar

  // Por padrao temos que criar conforme abaixo:
  // fim -> serve para obter a informacao
  // setFim -> sere para setar as informacoes no hooks
  const [fim, setFim] = useState({
    escolhaMaquina: '',
    escolhaUsuario: '',
    resultado: '',
  });
  return (
    // O ScrollView eh utilizado para rolar a tela
    <ScrollView>
      <View style={estilo.container}>
        <View style={estilo.logo}>
          <Logo />
        </View>
        <View style={estilo.botoes}>
          <BotaoComponent
            titulo="PEDRA"
            cor="#841584"
            handleClick={() => {
              jokenPo('PEDRA', fim, setFim);
            }}
          />
          <BotaoComponent
            titulo="PAPEL"
            cor="#339966"
            handleClick={() => {
              jokenPo('PAPEL', fim, setFim);
            }}
          />
          <BotaoComponent
            titulo="TESOURA"
            cor="#66ff66"
            handleClick={() => {
              jokenPo('TESOURA', fim, setFim);
            }}
          />
        </View>
        <View style={estilo.placar}>
          <Text style={estilo.resultado}>{fim.resultado}</Text>
        </View>
        <View style={estilo.figuras}>
          <View style={estilo.figura}>
            <Text>Escolha do Usuário</Text>
            <FiguraComponent nome={fim.escolhaUsuario} />
          </View>
          <View style={estilo.figura}>
            <Text>Escolha do Máquina</Text>
            <FiguraComponent nome={fim.escolhaMaquina} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Objeto utilizado para estilizar o componente individualmente
// para facilitar a leitura do codigo na tela principal
const estilo = StyleSheet.create({
  container: {
    // Criar uma area de flexao
    flex: 1,
    marginBottom: 10,
  },
  logo: {
    alignItems: 'center',
    backgroundColor: '#1FA2E8',
  },
  botoes: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  figuras: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  figura: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  resultado: {
    color: 'red',
    fontSize: 30,
  },
  placar: {
    marginTop: 10,
    alignItems: 'center',
  },
});
export default App;
