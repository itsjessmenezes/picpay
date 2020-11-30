import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
  margin-top: 25px;
  padding: 0 16px;
`;

export const Wrapper = styled.ScrollView`
/* padding: 20px; */


`;

export const Transaction = styled.Text`
  color: #FFF;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 20px;
`;

export const CardTransaction = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showHorizontalScrollIndicator: false,
})) `
  height: 130px;
`;


export const TransactionDetail = styled.TouchableOpacity`
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

export const TransactionDetailText = styled.Text`
  color: #FFF;
  font-size: 12px;
`;


export const CardStore = styled.View`
  background: #1E222B;
  height: 70px;
  border-radius: 8px;
  padding: 15px;
  margin-left: 10px;
`;

export const StoreDetails = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

`;

export const StoreDetailsText = styled.View`
  margin-left: 15px;
`;

export const StoreText = styled.Text`
  color: #FFF;
  font-size: 14px;
  font-weight: bold;

`;

export const StoreTextDetail = styled.Text`
  color: #FFF;
  font-size: 12px;
`;


export const CardLocation = styled.View`
  background: #1E222B;
  height: 70px;
  border-radius: 8px;
  padding: 15px;
  margin-left: 10px;
  margin-top: 15px;
`;

export const LocationDetails = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const LocationDetailText = styled.View`
  margin-left: 15px;
`;

export const LocationText = styled.Text`
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
`;

export const LocationTextDetail = styled.Text`
  color: #FFF;
  font-size: 12px;
`;
