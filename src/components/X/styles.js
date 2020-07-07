import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Area = styled.SafeAreaView`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled(Animated.View)`
  width: 10px;
  height: 60px;
  background-color: #2f2f2f;
  position: absolute;
  border-radius: 2px;
`;
