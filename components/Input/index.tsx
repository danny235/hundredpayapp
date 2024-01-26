import React, {ReactNode} from 'react';
import {
  StyleSheet,
  TextInputProps,
  View,
  useWindowDimensions,
} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '../Colors';
import {MediumText, RegularText} from '../styles/styledComponents';

interface InputProps extends TextInputProps {
  label: string;
  formikProps: any;
  formikKey: string;
  onChangeText?: (text: string) => void;
}

const StyledInput = styled.TextInput<{error?: boolean}>`
  border-radius: 7px;
  width: 100%;
  padding: 13px;
  font-family: SpaceGrotesk-Medium;
  font-size: 15px;
  border: 1px solid ${({error}) => (error ? 'red' : Colors.ash)};
  background-color: ${Colors.white};
`;

function Input({
  label,
  formikProps,
  formikKey,
  onChangeText,
  ...rest
}: InputProps): React.JSX.Element {
  const {fontScale} = useWindowDimensions();

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} label={label}>
      <StyledInput
        onChangeText={
          onChangeText ? onChangeText : formikProps.handleChange(formikKey)
        }
        onBlur={formikProps.handleBlur(formikKey)}
        error={formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        {...rest}
      />
    </FieldWrapper>
  );
}

interface FieldWrapperProps {
  children: ReactNode;
  label: string;
  formikProps: any;
  formikKey: string;
}

function FieldWrapper({
  children,
  label,
  formikProps,
  formikKey,
}: FieldWrapperProps): React.JSX.Element {
  const {fontScale} = useWindowDimensions();

  return (
    <View style={{gap: 10}}>
      <MediumText style={{fontSize: 15 / fontScale, color: Colors?.grayText}}>
        {label}
      </MediumText>
      {children}
      <RegularText style={styles.error}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </RegularText>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    marginBottom: 6,
    height: 17.5,
    color: 'red',
  },
});

export default Input;
