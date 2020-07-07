import React from 'react';
import {Animated, Easing} from 'react-native';

import {Area, Arrow} from './styles';

const X = () => {
  const arrow1 = new Animated.Value(0);
  const arrow2 = new Animated.Value(0);

  Animated.timing(arrow1, {
    toValue: 45,
    duration: 800,
    easing: Easing.elastic(1.5),
    useNativeDriver: false,
  }).start();

  Animated.timing(arrow2, {
    toValue: -45,
    duration: 800,
    easing: Easing.elastic(1.5),
    useNativeDriver: false,
  }).start();

  let r1 = arrow1.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  let r2 = arrow2.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Area>
      <Arrow style={{transform: [{perspective: 1000}, {rotate: r1}]}} />
      <Arrow style={{transform: [{perspective: 1000}, {rotate: r2}]}} />
    </Area>
  );
};

export default X;
