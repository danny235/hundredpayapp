import React from 'react';
import {Pressable, View, useWindowDimensions} from 'react-native';
import {Colors} from '../../../components/Colors';
import {PayIcon, RecieveIcon} from '../../../components/SvgAssets';
import {
  BoldText,
  LightText,
  RegularText,
} from '../../../components/styles/styledComponents';

type TransactionItemT = {
  id: number;
  title: string;
  from: string;
  date: string;
  amount: string;
  status: string;
};

interface TransactionItemProps {
  item: TransactionItemT;
}

export default function TransactionItem({
  item,
}: TransactionItemProps): React.JSX.Element {
  const {fontScale} = useWindowDimensions();
  return (
    <Pressable style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
      <View style={{gap: 4}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          {item.title.includes("Paid")  ? (
            <PayIcon />
          ) : (
            <RecieveIcon color={Colors.balanceBlack} />
          )}
          <BoldText
            style={{
              fontSize: 17 / fontScale,
              textTransform: 'capitalize',
              color: Colors.balanceBlack,
            }}>
            {item.title}
          </BoldText>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <LightText
            style={{
              fontSize: 14 / fontScale,
              color: Colors.grayText,
              borderRightColor: Colors.ash,
              borderRightWidth: 1,
              paddingRight: 10,
            }}>
            ID: {item.from}
          </LightText>
          <LightText style={{fontSize: 14 / fontScale, color: Colors.grayText}}>
            {item.date}
          </LightText>
        </View>
      </View>

      <View style={{marginLeft: 'auto', justifyContent: 'flex-end'}}>
        <BoldText
          style={{
            textAlign: 'right',
            fontSize: 17 / fontScale,
            textTransform: 'capitalize',
            color: Colors.balanceBlack,
          }}>
          N{item.amount}
        </BoldText>
        <RegularText
          style={{
            textAlign: 'right',
            fontSize: 15 / fontScale,
            textTransform: 'capitalize',
            color:
              item.status === 'failed' ? Colors.error07 : Colors.success700,
          }}>
          {item.status}
        </RegularText>
      </View>
    </Pressable>
  );
}
