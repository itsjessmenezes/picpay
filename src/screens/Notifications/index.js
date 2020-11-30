import React from 'react';


import {
  Container,
  Option,
  Title,
  Subtitle,

} from './styles';

import { Divider } from 'react-native';

const items = [

  {
    key: String(Math.random()),
    title: 'Dinheiro de volta! Parcele um boleto e ganhe com o PicPay até 20% de volta.',
    subtitle: 'Hoje às 16:42',
    bgColor: '#1E222B',
  },
  
  {
    key: String(Math.random()),
    title: 'No seu proximo pagamento em um produto da PicPay Store a gente te devolve 5%',
    subtitle: 'Hoje às 11:23',
    bgColor: '#1E222B',
  },

  {
    key: String(Math.random()),
    title: 'Ainda tem boleto? Então tem cashback! Parcele um boleto e ganhe com o PicPay até 20% de volta.',
    subtitle: 'Ontem às 15:11',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'No seu próximo pagamento com o aplicativo você ganha 20% de volta.',
    subtitle: 'Ontem às 10:57',
    bgColor: '#1E222B',
  },

  {
    key: String(Math.random()),
    title: 'Comprinhas no boleto tem cashback! É só parcelar seu boleto no PicPay pra ganhar até 20% de volta!',
    subtitle: '27 de nov 12:14',
    bgColor: '#1E222B',
  },

  {
    key: String(Math.random()),
    title: 'Dinheiro de volta! Parcele um boleto e ganhe com o PicPay até 20% de volta.',
    subtitle: '25 de nov 17:05',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'Dinheiro de volta! Parcele um boleto e ganhe com o PicPay até 10% de volta.',
    subtitle: '24 de nov 09:13',
    bgColor: '#000000',
  },

  {
    key: String(Math.random()),
    title: 'No seu próximo pagamento com o aplicativo você ganha 5% de volta.',
    subtitle: '20 de nov 13:14',
    bgColor: '#1E222B',
  },


]

export default function Notifications() {
  
  
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </Option>
      ))}

  </Container>
  );
}