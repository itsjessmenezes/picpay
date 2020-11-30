import React from 'react';

// import Transactions from '../../components/Transactions';

import { MaterialIcons, MaterialCommunityIcons, Ionicons, Fontisto, Feather, FontAwesome, SimpleLineIcons, } from '@expo/vector-icons';

// person-outline/user-circle-o, rhombus-split, ios-barcode, shopping-pos-machine, trending-up/line-chart
// bag, location-pin, ios-phone-portrait, ios-bus


import { 
  Container,
  Wrapper,
  Transaction,
  CardTransaction,
  TransactionDetail,
  TransactionDetailText,

  CardStore,
  StoreDetails,
  StoreDetailsText,
  StoreText,
  StoreTextDetail,

  CardLocation,
  LocationDetails,
  LocationDetailText,
  LocationText,
  LocationTextDetail,

} from './styles';

export default function Transactions() {
  return (
    <Container>
      <Wrapper>
      <Transaction>Transações</Transaction>
          <CardTransaction>
            <TransactionDetail>
              <FontAwesome name="user-circle-o" size={20} color="#10C86E" />
              <TransactionDetailText>Pagar pessoas</TransactionDetailText>
            </TransactionDetail>

            <TransactionDetail>
              <MaterialCommunityIcons name="rhombus-split" size={22} color="#10C86E" />
              <TransactionDetailText>Pix</TransactionDetailText>
            </TransactionDetail>

            <TransactionDetail>
              <Ionicons name="ios-barcode" size={22} color="#10C86E" />
              <TransactionDetailText>Pagar boleto</TransactionDetailText>
            </TransactionDetail>

            <TransactionDetail>
              <Fontisto name="shopping-pos-machine" size={20} color="#10C86E" />
              <TransactionDetailText>Pagar nas maquininhas</TransactionDetailText>
            </TransactionDetail>

            <TransactionDetail>
              <MaterialCommunityIcons name="message-outline" size={20} color="#10C86E" />
              <TransactionDetailText>Fazer cobrança</TransactionDetailText>
            </TransactionDetail>
          </CardTransaction>

          <CardStore>
            <StoreDetails>
            <SimpleLineIcons name="bag" size={20} color="#10C86E" />
            <StoreDetailsText>
              <StoreText>Store</StoreText>
              <StoreTextDetail>Compre o que quiser sem sair de casa</StoreTextDetail>
            </StoreDetailsText>
            </StoreDetails>
          </CardStore>

          <CardLocation>
            <LocationDetails>
            <SimpleLineIcons name="location-pin" size={20} color="#10C86E" />
            <LocationDetailText>
              <LocationText>Locais próximos</LocationText>
              <LocationTextDetail>Confira estabelecimentos perto de você</LocationTextDetail>
            </LocationDetailText>
            </LocationDetails>
          </CardLocation>


      </Wrapper>
    </Container>
  );
}