import styled from 'styled-components/native';


export const Container = styled.ScrollView`
  background: #1C1C1E;
`;

export const Wrapper = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 300px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

export const Help = styled.Text`
  margin-right: -270px;
  color: #8E8E93;
  font-weight: bold;
  font-size: 14px;
`;

export const AvatarDetail = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 130px;
  height: 130px;
`;

export const User = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const UserName = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  margin-top: 5px;
`;

export const Profile = styled.Text`
  color: #8E8E93;
  font-size: 14px;
  margin-top: 5px;
`;

export const MyAccount = styled.Text`
  color: #8E8E93;
  font-weight: bold;
  font-size: 14px;
  margin-left: -250px;
`;


export const Option = styled.TouchableOpacity`
    background: ${({ bgColor }) => bgColor };
  margin-top: 2px;
  padding: 10px;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Subtitle = styled.Text`
  color: #FFFFFF;
  font-size: 13px;
  margin-top: 5px;
`;

export const Logout = styled.Text`
  color: #8E8E93;
  background: #000000;
  font-size: 18px;
  font-weight: bold;
  margin-top: 2px;
  padding: 10px;
`;
