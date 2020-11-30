import React, { useState } from 'react';

import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';


import {
  Container,
  Wrapper,
  Header,
  Help,
  AvatarDetail,
  Avatar,
  User,
  UserName,
  Profile,
  MyAccount,

  Option,
  Title,
  Subtitle,
  Logout

} from './styles';

import avatar from '../../images/08.png';

const items = [
  {
    key: String(Math.random()),
    title: 'Meu PicPay',
    subtitle: '@itsjessmenezes',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'Meu número',
    subtitle: '(**) ****-9432',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'Meu E-mail',
    subtitle: 'j***************@gmail.com',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'Dados pessoais',
    subtitle: 'Nome, CPFe data de nascimento',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'Conta bancária',
    subtitle: '',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'Taxas e limites',
    subtitle: '',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'Meus endereços',
    subtitle: '',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'Meus favoritos',
    subtitle: '',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'Codigo promocional',
    subtitle: '',
    bgColor: '#000000',
  },




]

export default function Settings() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Help>Ajuda</Help>
          <AvatarDetail>
            <Avatar source={avatar} />
            <User>@itsjessmenezes</User>
            <UserName>Jessica Menezes</UserName>
            <Profile>Ver meu perfil ></Profile>
          </AvatarDetail>
          <MyAccount>Minha conta</MyAccount>
        </Header>

          {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>            
        </Option>
          ))}

          <Logout>Sair</Logout>

      </Wrapper>
    </Container>
  );
}