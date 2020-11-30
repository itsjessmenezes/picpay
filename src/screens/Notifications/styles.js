import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.ScrollView`
  background: #000;
`;

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }) => bgColor};
  padding: 15px;
  justify-content: space-between;
  margin-top: 1px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
    color: #FFF;
  font-size: 13px;
  margin-top: 10px;
`;

