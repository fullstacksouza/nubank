import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
// import {BlurView, VibrancyView} from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Brands from 'react-native-vector-icons/FontAwesome5';

import {
  Container,
  CloseModalContainer,
  CloseModalView,
  CloseButton,
  TopContent,
  TopText,
  Strong,
  OptionsContainer,
  OptionContainer,
  OptionText,
  Footer,
  InvitedText,
  ButtonBox,
  ButtonBoxText,
  EmailBadge,
  EmailBadgeText,
} from './styles';

export default function IndicateFriend({onClose, navigation}) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <CloseModalContainer
        onPress={() => {
          navigation.goBack();
        }}>
        <CloseModalView
          style={{flex: 1, backgroundColor: '#1a0820', opacity: 0.3}}
        />
      </CloseModalContainer>
      <View style={{flex: 9, backgroundColor: '#FFF'}}>
        <TopContent>
          <CloseButton
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="close" size={28} />
          </CloseButton>

          <TopText>
            Por <Strong>onde </Strong> você quer <Strong>indicar</Strong> seu
            amigo?
          </TopText>
        </TopContent>

        <OptionsContainer
          style={{
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: '#CCCCCC',
            marginTop: 20,
          }}>
          <OptionContainer>
            <Icon name="mail-outline" size={28} color="#7d7d7d" />
            <OptionText>E-MAIL</OptionText>
            <EmailBadge>
              <EmailBadgeText>10</EmailBadgeText>
            </EmailBadge>
          </OptionContainer>
          <OptionContainer>
            <Brands name="facebook-messenger" size={28} color="#7d7d7d" />
            <OptionText>FACEBOOK MESSENGER</OptionText>
          </OptionContainer>
          <OptionContainer>
            <Brands name="whatsapp" size={28} color="#7d7d7d" />
            <OptionText>WHATSAPP</OptionText>
          </OptionContainer>
          <OptionContainer>
            <Icon name="more-horiz" size={28} color="#7d7d7d" />
            <OptionText>MAIS OPÇOES</OptionText>
          </OptionContainer>
        </OptionsContainer>
        <Footer>
          <InvitedText>6 indicaçoes enviadas</InvitedText>
          <ButtonBox>
            <ButtonBoxText>VER</ButtonBoxText>
          </ButtonBox>
        </Footer>
      </View>
    </>
  );
}
