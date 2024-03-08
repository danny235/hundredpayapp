import React from 'react';
import {Image, Pressable, ScrollView, StyleSheet, TextInput, View, useWindowDimensions} from 'react-native';
import Bitcoin from '../../../assets/images/bitcoin.png';
import {Colors} from '../../../components/Colors';
import {ArrowDownIcon, AssetFilledIcon, CircleIcon, FilterIcon} from '../../../components/SvgAssets';
import CustomView from '../../../components/Views/CustomView';
import {
  BoldText,
  LightText,
  MediumText,
} from '../../../components/styles/styledComponents';

const boxesList = [
  {
    id: 1,
    title: 'Bitcoin',
    symbol: 'BTC',
    image: Bitcoin,
    balance: '0.002',
    payEquivalent: '500,000',
  },
  {
    id: 2,
    title: 'Bitcoin',
    symbol: 'BTC',
    image: Bitcoin,
    balance: '0.002',
    payEquivalent: '500,000',
  },
  {
    id: 3,
    title: 'Bitcoin',
    symbol: 'BTC',
    image: Bitcoin,
    balance: '0.002',
    payEquivalent: '500,000',
  },
  {
    id: 4,
    title: 'Bitcoin',
    symbol: 'BTC',
    image: Bitcoin,
    balance: '0.002',
    payEquivalent: '500,000',
  },
];

export default function Assets() {
  const {fontScale} = useWindowDimensions();

  return (
    <CustomView>
      <View
        style={{
          marginVertical: 20,
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <AssetFilledIcon color={Colors.primary} />
        <BoldText
          style={{
            fontSize: 17 / fontScale,
            borderLeftColor: Colors.ash,
            borderLeftWidth: 1,
            paddingHorizontal: 10,
          }}>
          Assets
        </BoldText>
      </View>
      <ScrollView>
        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            gap: 10,
            flexWrap: 'wrap',
          }}>
          {boxesList.map((box, i) => {
            return (
              <View style={styles.coinView} key={box.id}>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <Image
                    source={box.image}
                    style={{width: 17, height: 17, borderRadius: 17}}
                  />
                  <MediumText style={{fontSize: 15 / fontScale}}>
                    {box.symbol}
                  </MediumText>
                </View>
                <BoldText
                  style={{
                    fontSize: 26 / fontScale,
                    color: Colors.balanceBlack,
                  }}>
                  {box.balance}
                </BoldText>
                <LightText
                  style={{fontSize: 12 / fontScale, color: Colors.grayText}}>
                  ≈ {box.payEquivalent}.00 $Pay
                </LightText>
              </View>
            );
          })}
        </View>

        <View
          style={{
            marginVertical: 20,
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <Pressable
            style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <FilterIcon color={Colors.primary} />

            <LightText
              style={{
                fontSize: 13 / fontScale,
                borderLeftColor: Colors.grayText,
                borderLeftWidth: 1,
                paddingLeft: 10,
              }}>
              All
            </LightText>
            <ArrowDownIcon />
          </Pressable>

          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search assets here"
              style={{fontFamily: 'SpaceGrotesk-SemiBold', width: '60%'}}
              placeholderTextColor={Colors.grayText}
            />
            <CircleIcon color={Colors.grayText} />
          </View>
        </View>

        <View
          style={{
            marginVertical: 20,
            gap: 10,
          }}>
          {boxesList.map((box, i) => {
            return (
              <Pressable style={styles.singleCoin} key={box.id}>
                <View
                  style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <Image
                    source={box.image}
                    style={{width: 27, height: 27, borderRadius: 27}}
                  />
                  <MediumText style={{fontSize: 15 / fontScale}}>
                    {box.symbol}
                  </MediumText>
                </View>
                <View style={{marginLeft: 'auto'}}>
                  <BoldText
                    style={{
                      fontSize: 16 / fontScale,
                      color: Colors.balanceBlack,
                      textAlign: 'right',
                    }}>
                    {box.balance}
                  </BoldText>
                  <LightText
                    style={{
                      fontSize: 12 / fontScale,
                      textAlign: 'right',
                      color: Colors.grayText,
                    }}>
                    ≈ {box.payEquivalent}.00 $Pay
                  </LightText>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  coinView: {
    paddingVertical: 13,
    gap: 10,
    backgroundColor: Colors.memojiBackground,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexGrow: 1,
    flexBasis: '40%',
  },
  singleCoin: {
    flexDirection: 'row',
    borderBottomColor: Colors.memojiBackground,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  searchBox: {
    paddingVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.ash,
    borderRadius: 50,
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },
});
