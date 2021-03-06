import React, {useState, useEffect} from 'react';
import {View, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  CloseModalContainer,
  CloseModalView,
  Strong,
  Footer,
  ConfirmText,
  BlockQuestion,
} from './styles';

export default function IndicateFriend({onClose, navigation}) {
  const [keyboarIsVisible, setKeyboarIsVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboarIsVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboarIsVisible(false);
      },
    );
  }, []);

  useEffect(() => {
    if (keyboarIsVisible == true) {
      Keyboard.removeAllListeners('keyboardDidShow');
    } else {
      Keyboard.removeAllListeners('keyboardDidHide');
    }
  }, [keyboarIsVisible]);
  return (
    <>
      <CloseModalContainer
        onPress={() => {
          navigation.goBack();
        }}>
        <CloseModalView
          style={{flex: 6, backgroundColor: '#222', opacity: 0.3}}
        />
      </CloseModalContainer>
      <View
        style={{
          flex: 2,
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="lock-outline" size={50} color="#404040" />
        <BlockQuestion>
          Você quer <Strong>bloquear</Strong> <Strong>temporariamente</Strong> o
          seu cartão?
        </BlockQuestion>
      </View>
      <Footer flex={0.7}>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: '#cccccc',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ConfirmText block={true}>CANCELAR</ConfirmText>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ConfirmText>BLOQUEAR</ConfirmText>
        </View>
      </Footer>
    </>
  );
}
