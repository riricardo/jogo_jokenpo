import React from 'react';
import {Image, View} from 'react-native';

const logo = require('../img/jokenpo.png');

export const Logo = () => (
  <View>
    {/* Image eh utilizado para iserir uma imagem */}
    <Image source={logo} />
  </View>
);
