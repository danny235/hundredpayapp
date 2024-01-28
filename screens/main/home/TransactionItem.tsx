import React from 'react';
import {Pressable, View, useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../components/Colors';
import {
  BoldText,
  LightText,
  MediumText,
  RegularText,
} from '../../../components/styles/styledComponents';
import { PayIcon, RecieveIcon } from '../../../components/SvgAssets';

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
        <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
          {item.title === 'sent' ? (
            <PayIcon />
          ) : (
            <RecieveIcon color={Colors.mordernBlack} />
          )}
          <BoldText
            style={{fontSize: 17 / fontScale, textTransform: 'capitalize'}}>
            {item.title}
          </BoldText>
        </View>
        <MediumText style={{fontSize: 14 / fontScale}}>
          {item.title === 'sent'
            ? `To: ID ${item.from}`
            : `From: ID ${item.from}`}
        </MediumText>
        <LightText style={{fontSize: 13 / fontScale}}>{item.date}</LightText>
      </View>

      <View style={{marginLeft: 'auto', justifyContent: 'flex-end'}}>
        <BoldText
          style={{fontSize: 17 / fontScale, textTransform: 'capitalize'}}>
          N{item.amount}
        </BoldText>
        <RegularText
          style={{
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
