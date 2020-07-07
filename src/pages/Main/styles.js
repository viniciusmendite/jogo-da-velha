import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background: #633ed5;
`;

export const Area = styled.View`
  width: 300px;
  height: 300px;
  flex-direction: row;
  margin-top: 20px;
`;

export const Vertical = styled.View`
  flex: 1;
  border-left-width: 3px;
  border-left-color: #eee;
`;

export const Horizontal = styled.TouchableHighlight`
  flex: 1;
  border-top-width: 3px;
  border-top-color: #eee;
  justify-content: center;
  align-items: center;
`;

export const InfoArea = styled.View`
  margin-top: 30px;
  flex-direction: row;
`;

export const InfoTurn = styled.View`
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
`;

export const InfoTurnText = styled.Text`
  font-size: 16px;
  color: #eee;
  margin-bottom: 10px;
`;

export const InfoWinner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InfoWinnerText = styled.Text`
  font-size: 18px;
  text-transform: capitalize;
  color: #eee;
`;

export const ButtonReset = styled.TouchableHighlight`
  background-color: #cfb1ff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
`;
export const ButtonResetText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
`;
