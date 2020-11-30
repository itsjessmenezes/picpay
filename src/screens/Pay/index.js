import React from 'react';

import Transactions from '../../components/Transactions';

import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  Services,
  ServicesCard,
  ServicesDetail,
  ServicesDetailText,

} from './styles';

export default function Pay() {
  return (
    <Container>
      <Transactions />

      <Services>Serviços</Services>
      <ServicesCard>
        <ServicesDetail>
            <Ionicons  name="ios-phone-portrait" size={20} color="#10C86E" />
            <ServicesDetailText>Recarga de celular</ServicesDetailText>
          </ServicesDetail>

          <ServicesDetail>
            <Ionicons  name="ios-bus" size={20} color="#10C86E" />
            <ServicesDetailText>Cartão transporte</ServicesDetailText>
          </ServicesDetail>
        


        </ServicesCard>
    </Container>
  );
}