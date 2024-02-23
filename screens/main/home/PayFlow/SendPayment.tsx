import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import UserAvatar from '../../../../assets/images/DashboardEmojis/Avatar-a.png';
import {Button} from '../../../../components/Button/Button';
import {Colors} from '../../../../components/Colors';
import CustomNumberKeypad from '../../../../components/Keypad/CustomNumberKeypad';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  PayIcon,
} from '../../../../components/SvgAssets';
import CustomView from '../../../../components/Views/CustomView';
import CustomHeader from '../../../../components/headers/CustomHeaders';
import {
  BoldText,
  LightText,
  MediumText,
} from '../../../../components/styles/styledComponents';
import {RootStackParamList} from '../../../../routes/AppStacks';
import {addCommas} from '../../../../utils';
import ChooseAccountBalance from '../../../../components/ChooseAccountBalance/ChooseAccountBalance';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';

type SendPaymentT = {
  navigation: NavigationProp<RootStackParamList>;
};

export default function SendPayment({navigation}: SendPaymentT) {
  const {fontScale} = useWindowDimensions();
  const [amount, setAmount] = useState<number>(0);
  const [showSwitchBalanceModal, setShowSwithBalanceModal] = useState(false);
  const {accountBalanceType} = useSelector((state: RootState) => state.user);
  /*-- -- -- -- -- - --- -- */
  const [showKeypad, setShowKeypad] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handleKeypadToggle = () => {
    setShowKeypad(prevValue => !prevValue);
  };

  const handleKeypadKeyPress = (value: string) => {
    if (inputValue.length < 10) {
      setInputValue(prevValue => prevValue + value);
      setPhoneNumberError('Phone number must be 10 digits');
    } else if (inputValue.length === 10) {
      setPhoneNumberError('');
    } else {
      setPhoneNumberError('Phone number must be 10 digits');
    }
  };

  const handleBackspace = () => {
    setInputValue(prevValue => prevValue.slice(0, -1));
  };

  /*  -- ------- --- -- -*/

  useEffect(()=>{
    setShowKeypad(true)
  },[])

    const handleShowModal = () => {
      setShowSwithBalanceModal(true);
    };

  return (
    <CustomView>
      <CustomHeader
        text="Send Payment"
        icon={<PayIcon />}
        onPress={() => navigation.goBack()}
      />

      <Pressable
        onPress={() => setShowKeypad(false)}
        style={styles.payContainer}>
        <View style={{gap: 10, alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.avatarWrapper}>
            <Image style={styles.avatarImg} source={UserAvatar} />
          </View>
          <View style={styles.userTextWrapper}>
            <LightText style={{fontSize: 15 / fontScale,}}>
              Send money to
            </LightText>
            <MediumText style={{fontSize: 15 / fontScale, color: Colors.iconColor}}>Daniel Barima</MediumText>
          </View>
        </View>

        <Pressable onPress={handleShowModal} style={styles.payWithToggle}>
          <LightText
            style={{
              fontSize: 15 / fontScale,
              borderRightColor: Colors.modernBlack,
              borderRightWidth: 1,
              paddingHorizontal: 5,
            }}>
            Pay with
          </LightText>
          <BoldText style={{fontSize: 15 / fontScale}}>
            {accountBalanceType === 'naira' ? '₦' : '$PAY'}
          </BoldText>
          <ArrowDownIcon width={25} height={25} />
        </Pressable>

        <View style={styles.amountContainer}>
          <Pressable onPress={handleKeypadToggle} style={styles.amountWarpper}>
            <BoldText style={{fontSize: 30 / fontScale}}>
              {inputValue ? addCommas(inputValue) : 0}.00
            </BoldText>
          </Pressable>
          <LightText
            style={{
              fontSize: 17 / fontScale,
              textAlign: 'center',
              width: '70%',
            }}>
            Enter the amount you want to send to the user
          </LightText>
        </View>

        <View style={{marginLeft: 'auto'}}>
          <Button variant="primary" isLarge={false} isWide={false} onPress={()=>navigation.navigate("ConfirmPayment")}>
            <MediumText style={{color: Colors.white, fontSize: 15 / fontScale}}>
              Pay
            </MediumText>
            <ArrowRightIcon />
          </Button>
        </View>
      </Pressable>
      <CustomNumberKeypad
        isVisible={showKeypad}
        onClose={handleKeypadToggle}
        onKeyPress={handleKeypadKeyPress}
        onBackspace={handleBackspace}
      />
      {showSwitchBalanceModal && (
        <ChooseAccountBalance onHide={() => setShowSwithBalanceModal(false)} />
      )}
    </CustomView>
  );
}

const styles = StyleSheet.create({
  payContainer: {
    marginVertical: 50,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  userTextWrapper: {
    flexDirection: 'row',
    gap: 3,
  },
  payWithToggle: {
    flexDirection: 'row',
    paddingVertical: 10,
    width: '70%',
    borderColor: Colors.modernBlack,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 20,
    paddingHorizontal: 20,
  },
  amountWarpper: {
    paddingVertical: 10,
    width: '85%',
    borderBottomColor: Colors.modernBlack,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20,
  },
  amountContainer: {
    marginVertical: 20,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
