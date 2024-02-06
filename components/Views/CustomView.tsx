import React, {ReactNode} from 'react';
import {View, Text, } from 'react-native';
import {Colors} from '../Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface CustomViewProps {
  children: ReactNode;
}

export default function CustomView({children}: CustomViewProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: Colors.white,
        position: "relative"
      }}>
      {children}
    </View>
  );
}
