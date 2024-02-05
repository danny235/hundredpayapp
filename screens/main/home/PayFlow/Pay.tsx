import React, {useState} from 'react';
import {View, StyleSheet, TextInput, useWindowDimensions} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {Button} from '../../../../components/Button/Button';
import {Colors} from '../../../../components/Colors';
import {
  LightText,
  MediumText,
  SemiBoldText,
} from '../../../../components/styles/styledComponents';
import PayHeaders from '../../../../components/headers/PayHeaders';
import SafeAreaViewHeader from '../../../../components/Views/SafeAreaView';
import Input from '../../../../components/Input';
import {
  ArrowFrontIcon,
  CircleIcon,
  ScanIcon,
} from '../../../../components/SvgAssets';
import Memojis from '../Memojis';
import UserPayList from './UsersPayList';
import {ScrollView} from 'react-native';

const validationSchema = yup.object().shape({
  recipientNameOrID: yup
    .string()
    .min(3, 'Recipient Name or ID must be at least 3 characters')
    .required('Recipient Name or ID is required'),
});

export default function PayHome() {
  const formikProps = useFormik({
    initialValues: {
      recipientNameOrID: '',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values, 'logged');
      setSubmitted(true); // Set the submitted state to true upon form submission
    },
  });

  const {fontScale} = useWindowDimensions();
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  return (
    <SafeAreaViewHeader>
      <PayHeaders title="Send Payment" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <LightText style={styles.description}>
            Find and select the user you want to send payment to here.
          </LightText>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              marginTop: 12,
              //marginBottom: -24,
            }}>
            <View style={{width: '83%'}}>
              <Input
                label="Recipient Name or ID"
                formikProps={formikProps}
                formikKey="recipientNameOrID"
                placeholder="Enter Recipient Name or ID"
                autoCapitalize="none"
                keyboardType="default"
                placeholderTextColor={Colors.grayText}
                style={{height: 50}}
              />
            </View>
            <View style={{width: '15%', marginLeft: '2%'}}>
              <Button
                variant="primary"
                isLarge={false}
                isWide={false}
                onPress={() => {
                  formikProps.handleSubmit();
                }}>
                <ScanIcon color="#fff" />
              </Button>
            </View>
          </View>
          <View style={{marginTop: 12, gap: 24}}>
            {submitted && (
              <View
                style={{
                  backgroundColor: Colors.memojiBackground,
                  padding: 16,
                  borderRadius: 12,
                }}>
                <SemiBoldText style={{color: Colors.balanceBlack}}>
                  Send Money to:
                </SemiBoldText>
                <View style={{marginTop: 12, marginBottom: -24}}>
                  <UserPayList renderSingleItem />
                </View>
              </View>
            )}
            <View>
              <Memojis />

              <MediumText
                style={[styles.countryButtonText, {fontSize: 15 / fontScale}]}>
                Search
              </MediumText>
              <View style={styles.searchContainer}>
                <TextInput
                  style={[styles.input, {flex: 1}]}
                  placeholder="Search person or ID here..."
                  placeholderTextColor="#999"
                />
                <CircleIcon color={Colors.grayText} />
              </View>
            </View>
            <View>
              <SemiBoldText
                style={{color: Colors.balanceBlack, fontSize: 16 / fontScale}}>
                Send Money To:
              </SemiBoldText>
              <UserPayList />
            </View>
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
  description: {
    color: Colors.grayText,
    fontSize: 16,
    marginBottom: 20,
  },
  countryButtonText: {
    color: Colors?.grayText,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 4,
    borderColor: Colors?.searchInput,
  },
  input: {
    fontSize: 14,
    padding: 8,
    width: '100%',
    fontFamily: 'SpaceGrotesk-Medium',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
  },
});
