import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Area = styled.SafeAreaView`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled(Animated.View)`
  background-color: #2f2f2f;
  width: 60px;
  border-radius: 30px;
`;
