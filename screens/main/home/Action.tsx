import React from 'react';
import {Pressable, StyleSheet, View, useWindowDimensions} from 'react-native';
import {Colors} from '../../../components/Colors';
import {PayIcon, RecieveIcon} from '../../../components/SvgAssets';
import {MediumText} from '../../../components/styles/styledComponents';

interface ActionProps {
  onSendClick: () => void;
}

export default function Action({onSendClick}: ActionProps): React.JSX.Element {
  const {fontScale} = useWindowDimensions();

  return (
    <View style={{gap: 20, flexDirection: 'row'}}>
      <Pressable onPress={() => onSendClick()} style={styles.btn}>
        <PayIcon />
        <MediumText style={{fontSize: 15 / fontScale, color: Colors.black}}>
          Pay
        </MediumText>
      </Pressable>
      <Pressable style={styles.btn}>
        <RecieveIcon />
        <MediumText style={{fontSize: 15 / fontScale, color: Colors.black}}>
          Recieve
        </MediumText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.whiteShade,
    flexBasis: '40%',
    flexGrow: 1,
    paddingVertical: 14,
    gap: 10,
  },
});
