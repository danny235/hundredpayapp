import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleProp,
  View,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../components/Colors';
import {
  BoldText,
  LightText,
  MediumText,
} from '../../../components/styles/styledComponents';
import {RootStackParamList} from '../../../routes/AppStacks';
import Action from './Action';
import Balance from './Balance';
import TransactionItem from './TransactionItem';

import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Clipboard from '@react-native-clipboard/clipboard';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  ArrowFrontIcon,
  CopyIcon,
  NotifictionIcon,
} from '../../../components/SvgAssets';
import CustomView from '../../../components/Views/CustomView';
import SafeAreaViewHeader from '../../../components/Views/SafeAreaView';
import Memojis from './Memojis';

interface CustomBackdropProps {
  animatedIndex: SharedValue<number>;
  style: StyleProp<ViewStyle>;
  onPress: () => void;
}

export const CustomBackdrop: React.FC<CustomBackdropProps> = ({
  animatedIndex,
  style,
  onPress,
}) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolation.CLAMP,
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle],
  );

  return (
    <Animated.View style={containerStyle}>
      <TouchableOpacity style={style} onPress={onPress} />
    </Animated.View>
  );
};

const trx = [
  {
    id: 1,
    title: 'recieved',
    from: '984340',
    date: '5:45 PM, Aug 1, 2022',
    amount: '10,000',
    status: 'successful',
  },
  {
    id: 2,
    title: 'sent',
    from: '984340',
    date: '5:45 PM, Aug 1, 2022',
    amount: '10,000',
    status: 'successful',
  },
  {
    id: 3,
    title: 'recieved',
    from: '984340',
    date: '5:45 PM, Aug 1, 2022',
    amount: '10,000',
    status: 'successful',
  },
  {
    id: 4,
    title: 'sent',
    from: '984340',
    date: '5:45 PM, Aug 1, 2022',
    amount: '10,000',
    status: 'failed',
  },
];

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export default function Home({navigation}: HomeProps): React.JSX.Element {
  const {fontScale} = useWindowDimensions();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [copiedText, setCopiedText] = useState('');
  const copyToClipboard = () => {
    Clipboard.setString('234gh6');
  };
  const [snapTo, setSnapTo] = useState(['38%', '40%']);
  const snapPoints = useMemo(() => snapTo, [snapTo]);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handlePresentModalClose = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaViewHeader>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', gap: 10, paddingVertical: 20}}>
            <Image
              style={{borderRadius: 40, height: 40, width: 40}}
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1703617663829-ac7430988118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
              }}
            />
            <View>
              <BoldText
                style={{fontSize: 16 / fontScale, color: Colors.balanceBlack}}>
                Hello, Daniel 👋
              </BoldText>
              <Pressable
                onPress={copyToClipboard}
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <LightText
                  style={{
                    textTransform: 'uppercase',
                    fontSize: 12 / fontScale,
                    color: Colors.grayText,
                  }}>
                  ID: 234gh6
                </LightText>
                <CopyIcon />
              </Pressable>
            </View>
          </View>
          <Pressable>
            <NotifictionIcon />
          </Pressable>
        </View>
        <Balance />

        <Action 
        onSendClick={()=>navigation.navigate('Pay' as never)}
       // onSendClick={handlePresentModalPress} 
        />
        <Memojis />
        <View
          style={{
            backgroundColor: Colors.memojiBackground,
            padding: 16,
            borderRadius: 12,
          }}>
          <FlatList
            data={trx}
            style={{flexGrow: 1}}
            contentContainerStyle={{flex: 1, gap: 20, paddingVertical: 20}}
            ListHeaderComponent={() => (
              <Pressable
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderLeftColor: Colors.primary,
                    borderLeftWidth: 5,
                    borderRadius: 20,
                    height: 16,
                  }}
                />
                <BoldText
                  style={{
                    fontSize: 17 / fontScale,
                    color: Colors.balanceBlack,
                  }}>
                  History
                </BoldText>
                <ArrowFrontIcon />
              </Pressable>
            )}
            renderItem={({item}) => <TransactionItem item={item} />}
          />
        </View>
      </ScrollView>

      {/* Send naira modal */}
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleIndicatorStyle={{
            borderWidth: 0,
            borderColor: '',
            width: '0%',
          }}
          enableContentPanningGesture={false}
          backdropComponent={({animatedIndex, style}) => (
            <CustomBackdrop
              onPress={handlePresentModalClose}
              animatedIndex={animatedIndex}
              style={style}
            />
          )}
          animateOnMount={true}>
          <Icon name="x" />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </SafeAreaViewHeader>
  );
}
