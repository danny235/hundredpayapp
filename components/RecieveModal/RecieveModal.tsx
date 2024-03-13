import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NavigationProp} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Pressable, StyleSheet, View, useWindowDimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {CustomBackdrop} from '../../../../components/ChooseAccountBalance/ChooseAccountBalance';
import {Colors} from '../../../../components/Colors';
import {SelectIcon} from '../../../../components/SvgAssets';
import {
  LightText,
  MediumText,
} from '../../../../components/styles/styledComponents';
import {RootStackParamList} from '../../../../routes/AppStacks';

type RecieveModalT = {
  navigation?: NavigationProp<RootStackParamList>;
  onHide: () => void;
};

export default function RecieveModal({navigation, onHide}: RecieveModalT) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [snapTo, setSnapTo] = useState(['38%', '50%']);
  const snapPoints = useMemo(() => snapTo, [snapTo]);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handlePresentModalClose = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    onHide();
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
        <View style={{paddingVertical: 20, gap: 20}}>
          <View style={{gap: 10, flexDirection: 'row'}}>
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
            style={{fontSize: 18 / fontScale, color: Colors.authTextTitle}}>
            You can select, search for or generate request code here:
          </LightText>

          <Pressable>
            <LightText>Search request code here...</LightText>
          </Pressable>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({});
