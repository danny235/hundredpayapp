import { View, Text, useWindowDimensions, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import CustomView from '../../../components/Views/CustomView'
import { ArrowForwardIcon,  DiscoverIcon, LinkIcon } from '../../../components/SvgAssets'
import { BoldText, MediumText, RegularText } from '../../../components/styles/styledComponents'
import { Colors } from '../../../components/Colors'

export default function Discover(): React.JSX.Element {
  const {fontScale} = useWindowDimensions()
  return (
    <CustomView>
      <View style={{gap: 20, alignItems: 'center', marginVertical: 50}}>
        <DiscoverIcon color={Colors.primary} width={80} height={80} />
        <BoldText style={{fontSize: 20 / fontScale}}>
          Discover Amazing Features
        </BoldText>
      </View>

      <View style={{gap: 20}}>
        <Pressable
          style={styles.discoverCTA}>
          <LinkIcon />
          <View style={{gap: 10, flexShrink: 1}}>
            <MediumText style={{fontSize: 17 / fontScale}}>
              Generate Request Link
            </MediumText>
            <RegularText
              style={{
                fontSize: 13 / fontScale,
                color: Colors.grayText,
                width: "80%"
              }}>
              Generate a link you can send to your client to make payments.
            </RegularText>
          </View>
          <ArrowForwardIcon color={Colors.iconColor} />
        </Pressable>

        <Pressable
          style={styles.discoverCTA}>
          <LinkIcon />
          <View style={{gap: 10, flexShrink: 1}}>
            <MediumText style={{fontSize: 17 / fontScale, }}>
              Payouts
            </MediumText>
            <RegularText
              style={{
                fontSize: 13 / fontScale,
                color: Colors.grayText,
                width: "80%"
              }}>
              Gain more control over your payouts.
            </RegularText>
          </View>
          <ArrowForwardIcon color={Colors.iconColor} />
        </Pressable>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  discoverCTA: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.memojiBackground,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: "space-between"
  },
});