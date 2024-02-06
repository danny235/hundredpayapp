import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  TextInput,
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
import {ArrowDownIcon, ArrowRightIcon} from '../../../../components/SvgAssets';
import {Button} from '../../../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';

export default function EnterAmount() {
  const {fontScale} = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <SafeAreaViewHeader>
      <PayHeaders title="Send Payment" />
      <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
        <View style={styles.container}>
          <View style={{alignItems: 'center', gap: 12, marginVertical: 24}}>
            <Image source={AvatarE} style={styles.avatar} />
            <View style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
              <LightText style={{color: Colors.grayText}}>
                Send Money to
              </LightText>
              <SemiBoldText style={styles.username}>
                Ibeneme Ikenna
              </SemiBoldText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 4,
                alignItems: 'center',
                marginVertical: 24,
                borderColor: Colors.ash,
                borderWidth: 1,
                borderRadius: 16,
                padding: 14,
              }}>
              <LightText style={{color: Colors.grayText}}>Pay with</LightText>
              <View
                style={{
                  borderColor: Colors.ash,
                  borderWidth: 1,
                  height: 16,
                  marginHorizontal: 4,
                  borderRadius: 18,
                }}
              />
              <SemiBoldText style={styles.username}>NGN - 500,000</SemiBoldText>
              <ArrowDownIcon color={Colors.grayText} />
            </View>
            <TouchableOpacity
              style={{
                borderBottomColor: Colors.grayText,
                borderBottomWidth: 1,
                paddingBottom: 8,
                width: '70%',
              }}>
              <TextInput
                style={[styles.input]}
                placeholder="Enter Amount"
                placeholderTextColor="#999"
              />
            </TouchableOpacity>
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

          <View style={{marginLeft: 'auto'}}>
            <Button
              variant="primary"
              isLarge={false}
              isWide={false}
              onPress={() => {
                navigation.navigate('ConfirmPayment' as never);
              }}>
              <MediumText
                style={{color: Colors.white, fontSize: 15 / fontScale}}>
                Pay
              </MediumText>
              <ArrowRightIcon />
            </Button>
          </View>
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
});
