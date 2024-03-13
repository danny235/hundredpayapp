import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NavigationProp} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, View, useWindowDimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../../../../components/Button/Button';
import {CustomBackdrop} from '../../../../components/ChooseAccountBalance/ChooseAccountBalance';
import {Colors} from '../../../../components/Colors';
import {
  AddCircleIcon,
  CircleIcon,
  RecieveIcon,
  SelectIcon,
} from '../../../../components/SvgAssets';
import {
  LightText,
  MediumText,
} from '../../../../components/styles/styledComponents';
import {RootStackParamList} from '../../../../routes/AppStacks';

type RecieveModalT = {
  navigation?: NavigationProp<RootStackParamList>;
};

export default function RecieveModal({navigation}: RecieveModalT) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [snapTo, setSnapTo] = useState(['38%', '70%']);
  const snapPoints = useMemo(() => snapTo, [snapTo]);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handlePresentModalClose = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    navigation?.goBack();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const {fontScale} = useWindowDimensions();
  const dispatch = useDispatch();

  useEffect(() => {
    handlePresentModalPress();
    return () => {
      handlePresentModalClose();
    };
  }, []);
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enableContentPanningGesture={false}
        enablePanDownToClose={false}
        handleIndicatorStyle={{
          borderWidth: 3,
          borderColor: Colors.ash,
          width: '20%',
        }}
        backdropComponent={({animatedIndex, style}) => (
          <CustomBackdrop
            onPress={handlePresentModalClose}
            animatedIndex={animatedIndex}
            style={style}
          />
        )}
        animateOnMount={true}>
        <ScrollView contentContainerStyle={{gap: 20}} style={{paddingVertical: 20, gap: 20, paddingHorizontal: 20}}>
          <View style={{gap: 20, flexDirection: 'row'}}>
            <SelectIcon />
            <MediumText
              style={{
                fontSize: 20 / fontScale,
                borderLeftColor: Colors.ash,
                borderLeftWidth: 1,
                paddingLeft: 6,
              }}>
              Select Payment Link
            </MediumText>
          </View>
          <LightText
            style={{fontSize: 15 / fontScale, color: Colors.authTextTitle}}>
            You can select, search for or generate request code here:
          </LightText>

          <Pressable style={styles.searchBox}>
            <LightText>Search request code here...</LightText>
            <CircleIcon color={Colors.grayText} />
          </Pressable>

          <View style={styles.emptyPaymentLinks}>
            <MediumText
              style={{
                textAlign: 'center',
                fontSize: 15 / fontScale,
                color: Colors.balanceBlack,
              }}>
              No payments links yet
            </MediumText>
            <LightText
              style={{
                textAlign: 'center',
                fontSize: 15 / fontScale,
                color: Colors.balanceBlack,
                width: "80%"
              }}>
              Links generated would appear in this section
            </LightText>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              width: '100%',
              marginTop: 'auto',
            }}>
            <Button
              style={{flexBasis: 50, flexGrow: 1}}
              variant="secondary"
              isLarge={false}
              isWide={false}>
              <AddCircleIcon />
              <MediumText style={{fontSize: 15 / fontScale}}>
                Generate Link
              </MediumText>
            </Button>

            <Button
              style={{flexBasis: 50, flexGrow: 1}}
              variant="primary"
              isLarge={false}
              isWide={false}>
              <RecieveIcon color={Colors.white} />
              <MediumText
                style={{color: Colors.white, fontSize: 15 / fontScale}}>
                Instant Recieve
              </MediumText>
            </Button>
          </View>
        </ScrollView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.ash,
    borderRadius: 50,
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyPaymentLinks: {
    backgroundColor: Colors.whiteShade,
    borderRadius: 10,
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
