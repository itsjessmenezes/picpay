import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;


export const Services = styled.Text`
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  margin-left: 25px;
  margin-top: 25px;
`;

export const ServicesCard = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
})) `
  height: 130px;
  flex-direction: row;
  margin-left: 20px;

`;

export const ServicesDetail = styled.TouchableOpacity`
  width: 110px;
  height: 90px;
  border-radius: 8px;
  background: #1E222B;
  margin-top: 20px;
  margin-left: 10px;
  padding: 15px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ServicesDetailText = styled.Text`
  color: #FFF;
  font-size: 12px;
`;
