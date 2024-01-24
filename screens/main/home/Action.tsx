import { View, Text, Pressable, StyleSheet, useWindowDimensions, TouchableOpacity, StyleProp } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { BoldText, LightText, MediumText } from '../../../components/styles/styledComponents'
import Icon from 'react-native-vector-icons/Feather'
import { Colors } from '../../../components/Colors'
import {BottomSheetModal, BottomSheetModalProps, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { ViewStyle } from 'react-native'

interface ActionProps {
  onSendClick: () => void;
}

export default function Action({onSendClick}: ActionProps): React.JSX.Element {
  const {fontScale} = useWindowDimensions();
  

  return (
    <View style={{gap: 20, paddingVertical: 20}}>
      <Pressable onPress={()=>onSendClick()} style={styles.btn}>
        <View style={{gap: 10}}>
          <MediumText style={{fontSize: 17 / fontScale, color: Colors.black}}>
            Send
          </MediumText>
          <LightText>Send funds to other users</LightText>
        </View>
        <Icon name="upload" size={24} color={Colors.error5} />
      </Pressable>
      <Pressable style={styles.btn}>
        <View style={{gap: 10}}>
          <MediumText style={{fontSize: 17 / fontScale, color: Colors.black}}>
            Recieve
          </MediumText>
          <LightText>Recieve funds to other users</LightText>
        </View>
        <Icon name="download" size={24} color={Colors.success500} />
      </Pressable>

      
    </View>
  );
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 100,
        borderRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: Colors.whiteShade
    }
})