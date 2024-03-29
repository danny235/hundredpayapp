import React from 'react';
import {Pressable, View, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../components/Colors';
import {
  BoldText,
  LightText,
  MediumText,
  RegularText,
} from '../../../components/styles/styledComponents';
import {ArrowDownIcon, WalletIcon} from '../../../components/SvgAssets';
type Props = {
  onBalanceClick: ()=> void
}
export default function Balance({onBalanceClick}: Props ): React.JSX.Element {
  const {fontScale} = useWindowDimensions();
  return (
    <View
      style={{
        gap: 20,
        paddingBottom: 40,
        paddingTop: 16
      }}>
      <Pressable
        onPress={onBalanceClick}
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          borderBottomColor: Colors.ash,
          paddingVertical: 10,
          borderBottomWidth: 1,
          width: '60%',
        }}>
        <View
          style={{
            borderRightColor: Colors.ash,
            paddingRight: 10,
            borderRightWidth: 1,
          }}>
          <WalletIcon />
        </View>
        <MediumText style={{fontSize: 15 / fontScale, color: Colors.grayText}}>
          Account Balance
        </MediumText>
        <ArrowDownIcon />
      </Pressable>
      <View style={{gap: 10}}>
        <BoldText
          style={{fontSize: 29 / fontScale, color: Colors.balanceBlack}}>
          ₦ 60,000.00
        </BoldText>
        <RegularText style={{color: Colors.grayText}}>100,000$PAY</RegularText>
      </View>
    </View>
  );
}
