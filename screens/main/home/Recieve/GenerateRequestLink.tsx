import {NavigationProp} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useRef} from 'react';
import {
  NativeSyntheticEvent,
  Platform,
  TextInputFocusEventData,
  View,
  useWindowDimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import {Button} from '../../../../components/Button/Button';
import {Colors} from '../../../../components/Colors';
import Input from '../../../../components/Input';
import {
  AddIcon,
  ArrowDownIcon,
  ArrowRightIcon,
} from '../../../../components/SvgAssets';
import CustomView from '../../../../components/Views/CustomView';
import CustomHeader from '../../../../components/headers/CustomHeaders';
import {useKeyboard} from '../../../../components/hooks/useKeyboard';
import {
  BorderPressable,
  LightText,
  MediumText,
} from '../../../../components/styles/styledComponents';
import {RootStackParamList} from '../../../../routes/AppStacks';

const formatNumberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const generateRequestLinkSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  amount: yup.string().required().label('Amount'),
});

type GenerateCodeT = {
  navigation: NavigationProp<RootStackParamList>;
};

export default function GenerateRequestLink({navigation}: GenerateCodeT) {
  const {fontScale} = useWindowDimensions();
  const keyboardHeight = useKeyboard();

  let scrollRef = useRef<KeyboardAwareScrollView>(null);

  const scrollToInput = (reactNode: any) => {
    if (scrollRef.current) {
      scrollRef.current.scrollToFocusedInput(reactNode);
    }
  };

  const handleInputFocus = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    scrollToInput(event.target);
  };

  return (
    <CustomView>
      <CustomHeader
        text="Generate Request Link"
        icon={<AddIcon />}
        onPress={() => navigation.goBack()}
      />

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        contentContainerStyle={{flex: 1}}>
        <Formik
          initialValues={{
            name: '',
            amount: '',
          }}
          onSubmit={async (values, actions) => {
            console.log(values.name, values.amount.replace(/,/g, ''));
          }}
          validationSchema={generateRequestLinkSchema}>
          {formikProps => (
            <View style={{gap: 12, flex: 1}}>
              <View>
                <LightText
                  style={{
                    fontSize: 14 / fontScale,
                    marginVertical: 20,
                    color: Colors.grayText,
                  }}>
                  Type in the name of the request you want to create a link for
                </LightText>
                <Input
                  placeholder="e.g School Fees"
                  formikProps={formikProps}
                  formikKey="name"
                  value={formikProps.values.name}
                  label="Name Request"
                  placeholderTextColor={Colors?.ash}
                />
                <LightText
                  style={{
                    fontSize: 14 / fontScale,
                    marginVertical: 20,
                    color: Colors.grayText,
                  }}>
                  Select currency and enter the amount you want to receive from
                  the sender
                </LightText>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                  }}>
                  <View style={{gap: 10, width: '30%'}}>
                    <MediumText
                      style={{
                        fontSize: 15 / fontScale,
                        color: Colors?.balanceBlack,
                      }}>
                      Currency
                    </MediumText>
                    <BorderPressable>
                      <MediumText
                        style={{
                          fontSize: 14 / fontScale,
                          color: Colors.balanceBlack,
                        }}>
                        $Pay
                      </MediumText>
                      <ArrowDownIcon
                        color={Colors.primary}
                        width={26}
                        height={26}
                      />
                    </BorderPressable>
                  </View>

                  <View style={{width: '65%'}}>
                    <Input
                      formikProps={formikProps}
                      formikKey="amount"
                      placeholder="000.000"
                      value={formikProps.values.amount}
                      label="Amount"
                      placeholderTextColor={Colors?.ash}
                      keyboardType="decimal-pad"
                      onChangeText={(text: string) => {
                        // Remove commas and other non-numeric characters
                        const cleanedText = text.replace(/[^0-9.]/g, '');

                        // Format the number with commas
                        const formattedAmount = formatNumberWithCommas(
                          Number(cleanedText),
                        );

                        // Update the Formik field value
                        formikProps.setFieldValue('amount', formattedAmount);
                        formikProps.handleChange('amount');
                      }}
                    />
                  </View>
                </View>
              </View>

              <Button
                variant="primary"
                isLarge={false}
                isWide={true}
                style={{
                  marginTop: 'auto',
                  marginBottom: Platform.OS === 'ios' ? keyboardHeight : 5,
                }}
                onPress={() => {
                  formikProps.values.amount.replace(/,/g, '');
                  formikProps.handleSubmit();
                  console.log(formikProps.values.amount.replace(/,/g, ''));
                }}>
                <MediumText
                  style={{color: Colors.white, fontSize: 15 / fontScale}}>
                  Continue
                </MediumText>
                <ArrowRightIcon />
              </Button>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </CustomView>
  );
}
