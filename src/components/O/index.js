import React from 'react';
import {Animated, Easing} from 'react-native';

import {Area, Circle} from './styles';

const O = () => {
  const heightCircle = new Animated.Value(0);

  Animated.timing(heightCircle, {
    toValue: 60,
    duration: 800,
    easing: Easing.elastic(1.5),
    useNativeDriver: false,
  }).start();

  return (
    <Area>
      <Circle style={{height: heightCircle}} />
    </Area>
  );
};

export default O;
