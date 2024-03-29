import React from 'react';
import {View, Pressable, useWindowDimensions} from 'react-native';
import { MediumText } from '../styles/styledComponents';
import { Colors } from '../Colors';
import { ArrowBackwardIcon } from '../SvgAssets';


interface Props {
  text: string;
  icon: React.ReactNode;
  onPress: () => void;
}

const CustomHeader: React.FC<Props> = ({text, icon, onPress}) => {
    const {fontScale} = useWindowDimensions()
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingVertical: 20,
      }}>
      <Pressable onPress={onPress}>
        <ArrowBackwardIcon />
      </Pressable>
      <View
        style={{
          borderRightColor: Colors.ash,
          borderRightWidth: 1,
          paddingRight: 6,
        }}>
        {icon}
      </View>
      <MediumText
        style={{fontSize: 17 / fontScale, color: Colors.authTextTitle}}>
        {text}
      </MediumText>
    </View>
  );
};

export default CustomHeader;
