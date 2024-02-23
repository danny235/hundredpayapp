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
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
type Props = {
  onBalanceClick: ()=> void
}
export default function Balance({onBalanceClick}: Props ): React.JSX.Element {
  const {fontScale} = useWindowDimensions();
  const {accountBalanceType} = useSelector((state: RootState) => state.user);
  return (
    <View
      style={{
        gap: 20,
        paddingBottom: 40,
        paddingTop: 16,
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
          {accountBalanceType === 'naira' ? '₦ 60,000.00' : '100,000$PAY'}
        </BoldText>
        <RegularText style={{color: Colors.grayText}}>
          {accountBalanceType === 'pay-token' ? ' ₦ 60,000.00' : '100,000$PAY'}
        </RegularText>
      </View>
    </View>
  );
}
