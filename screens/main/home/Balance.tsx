import React from 'react';
import {Pressable, View, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../components/Colors';
import {
  BoldText,
  LightText,
  MediumText,
  RegularText,
  SemiBoldText,
} from '../../../components/styles/styledComponents';
import {ArrowDownIcon, EyeIcon, EyeLineIcon, WalletIcon} from '../../../components/SvgAssets';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import {BlurView} from '@react-native-community/blur';
import { updateShowAccountBalance } from '../../../features/user/userSlice';
type Props = {
  onBalanceClick?: ()=> void
}
export default function Balance({onBalanceClick}: Props ): React.JSX.Element {
  const {fontScale} = useWindowDimensions();
  const {accountBalanceType, showAccountBalance} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch()
  return (
    <View
      style={{
        gap: 4,
        paddingVertical: 5,
      }}>
      <View
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
        <RegularText style={{fontSize: 15 / fontScale, color: Colors.grayText}}>
          Account Balance
        </RegularText>
        <Pressable onPress={() => dispatch(updateShowAccountBalance())}>
          {showAccountBalance ? (
            <EyeLineIcon width={15} height={15} />
          ) : (
            <EyeIcon width={15} height={15} />
          )}
        </Pressable>
      </View>
      <View style={{gap: 2}}>
        <SemiBoldText
          style={{fontSize: 27 / fontScale, color: Colors.balanceBlack}}>
          {/* {accountBalanceType === 'naira' ? '₦ 60,000.00' : '100,000$PAY'} */}
          {showAccountBalance ? '₦ 60,000.00' : '******'}
        </SemiBoldText>
        <MediumText style={{color: Colors.grayText, fontSize: 13 / fontScale}}>
          {/* {accountBalanceType === 'pay-token' ? ' ₦ 60,000.00' : '100,000$PAY'} */}
          {showAccountBalance ? '100,000$PAY' : '******'}
        </MediumText>
      </View>
    </View>
  );
}
