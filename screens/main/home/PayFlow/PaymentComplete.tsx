import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import {Colors} from '../../../../components/Colors';
import PayHeaders from '../../../../components/headers/PayHeaders';
import SafeAreaViewHeader from '../../../../components/Views/SafeAreaView';
import {ScrollView} from 'react-native';
import AvatarE from '../../../../assets/images/DashboardEmojis/Avatar-e.png';
import {
  BoldText,
  LightText,
  MediumText,
  SemiBoldText,
} from '../../../../components/styles/styledComponents';
import {ArrowRightIcon} from '../../../../components/SvgAssets';
import {Button} from '../../../../components/Button/Button';
import UserPayList from './UsersPayList';
import {useNavigation} from '@react-navigation/native';

export default function PaymentComplete() {
  const {fontScale} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <SafeAreaViewHeader>
      <PayHeaders title="Payment Complete" />
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../../assets/images/AuthMemoji.png')}
              resizeMode="contain"
            />
          </View>

          <View style={{alignItems: 'center', gap: 12, marginVertical: 12}}>
            <LightText>Total Amount:</LightText>
            <BoldText style={{fontSize: 32, color: Colors.balanceBlack}}>
              6,000
            </BoldText>

            <LightText
              style={{
                fontSize: 14 / fontScale,
                color: Colors.grayText,
                textAlign: 'center',
                width: '70%',
              }}>
              Enter the amount you want to send to the user
            </LightText>
          </View>
          <Pressable
            style={{
              backgroundColor: Colors.memojiBackground,
              padding: 16,
              borderRadius: 12,
              marginBottom: 12,
            }}
            onPress={() => navigation.navigate('EnterAmount' as never)}>
            <SemiBoldText style={{color: Colors.balanceBlack}}>
              To Recipient:
            </SemiBoldText>
            <View style={{marginTop: 4, marginBottom: -24}}>
              <UserPayList renderSingleItem />
            </View>
          </Pressable>
          <View>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
   
              }}>
              <LightText style={{color: Colors.grayText}}>
                Transaction Fee
              </LightText>
              <SemiBoldText style={{color: Colors.balanceBlack}}>
                {' '}
                0 $Pay
              </SemiBoldText>
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginVertical: 10,
              }}>
              <LightText style={{color: Colors.grayText}}>
                Payment Ref Code:{' '}
              </LightText>
              <SemiBoldText style={{color: Colors.balanceBlack}}>
                {' '}
                3456Y8BN0987W12345YHB
              </SemiBoldText>
            </View>

            <View style={{marginVertical: 24}}>
              <LightText style={{color: Colors.grayText}}>Note:</LightText>
              <LightText style={{color: Colors.grayText}}>
                Make sure to confirm the all details of this transaction to
                ensure you are making payments to the right recipient.
              </LightText>
            </View>
          </View>

          <Button
            variant="primary"
            isLarge={false}
            isWide={false}
            // onPress={() => {
            //   navigation.navigate('TransactionPin' as never);
            // }}
            >
            <MediumText style={{color: Colors.white, fontSize: 15 / fontScale}}>
              Pay
            </MediumText>
            <ArrowRightIcon />
          </Button>
        </View>
      </ScrollView>
    </SafeAreaViewHeader>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    color: Colors.balanceBlack,
    paddingRight: 12,
  },
  input: {
    fontSize: 22,
    padding: 8,
    width: '100%',
    fontFamily: 'SpaceGrotesk-Medium',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    color: Colors.balanceBlack,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 140,
  },
});
