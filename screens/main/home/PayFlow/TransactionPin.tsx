import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import PayHeaders from '../../../../components/headers/PayHeaders';
import SafeAreaViewHeader from '../../../../components/Views/SafeAreaView';
import { Colors } from '../../../../components/Colors';
import { LightText, MediumText } from '../../../../components/styles/styledComponents';
import { Button } from '../../../../components/Button/Button';
import { ArrowRightIcon } from '../../../../components/SvgAssets';
import { ScrollView } from 'react-native';

interface RootAuthI {
  navigation: NavigationProp<any>;
}

export default function TransactionPin({
  navigation,
}: RootAuthI): React.JSX.Element {
  const [pin, setPin] = useState('');

  const handleChange = (text: string, index: number) => {
    if (text.length <= 1) {
      const newPin = pin.split('');
      newPin[index] = text;
      setPin(newPin.join(''));
    }
  };

  return (
    <SafeAreaViewHeader>
      <PayHeaders title="Transaction Pin" />
      <ScrollView style={{ marginTop: 32, height:'100%' }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../../../assets/images/Pin.png')}
          resizeMode="contain"
        />
      </View>

        <LightText
          style={{ color: Colors?.grayText, marginTop: -24, marginBottom: 24 }}>
          Enter your transaction pin here to complete the payment process.
        </LightText>
        <MediumText style={{ color: Colors.grayText, marginBottom: 4 }}>
          Secure Code
        </MediumText>
        <View style={styles.gridContainer}>
          {[...Array(6)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.gridItem}
              value={pin[index] || ''}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={text => handleChange(text, index)}
              placeholder="0"
              placeholderTextColor={Colors.grayText}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            variant="primary"
            isLarge={false}
            isWide={false}
            onPress={() => {
              navigation.navigate('PaymentComplete');
            }}>
            <MediumText style={styles.buttonText}>Continue</MediumText>
            <ArrowRightIcon />
          </Button>
        </View>
      </ScrollView>
  
    </SafeAreaViewHeader>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 48,
  },
  gridItem: {
    width: '14%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderColor: Colors.ash,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'SpaceGrotesk-Medium',
  },
  buttonContainer: {
    marginLeft: 'auto',
  },
  buttonText: {
    color: Colors.white,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 32,
  },
  image: {
    width: 300,
    height: 140,
  },
});
