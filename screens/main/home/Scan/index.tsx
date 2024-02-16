import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  ImageBackground,
  Pressable,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import ScanCorners from '../../../../assets/images/scanCorners.png';
import {Colors} from '../../../../components/Colors';
import {
  BulbIcon,
  BulbRedIcon,
  GalleryIcon,
  ScanRedIcon,
  ScanWhiteIcon,
} from '../../../../components/SvgAssets';
import CustomView from '../../../../components/Views/CustomView';
import CustomHeader from '../../../../components/headers/CustomHeaders';
import {
  BoldText,
  RegularText,
} from '../../../../components/styles/styledComponents';
import {RootStackParamList} from '../../../../routes/AppStacks';

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

function Scan({navigation}: Props) {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const {fontScale, height, width} = useWindowDimensions();
  const [flashOn, setFlashOn] = useState(false);
  const cameraRef = useRef<Camera>(null);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(
        `Scanned ${codes.length} ${JSON.stringify(codes[0].value)} ${typeof JSON.stringify(codes[0].value)}  codes!`,
      );
      (navigation as any).replace('SendPayment');
    },
  });

  const toggleCamera = async () => {

    setFlashOn(!flashOn);

  };

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const device = useCameraDevice('back');

  if (device == null)
    return <RegularText>No camera device please grant access!</RegularText>;

  return (
    <CustomView>
      <CustomHeader
        text="Scan QR code"
        icon={<ScanRedIcon />}
        onPress={() => navigation.goBack()}
      />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          marginVertical: 20,
          paddingHorizontal: 20,
        }}>
        <BoldText
          style={{
            fontSize: 20 / fontScale,
            textAlign: 'center',
            color: Colors.black,
          }}>
          Scan code to pay
        </BoldText>
        <RegularText
          style={{
            fontSize: 13 / fontScale,
            textAlign: 'center',
            color: Colors.grayText,
          }}>
          Point the camera to the QR code or load picture with the QR code from
          your gallery to continue.
        </RegularText>
      </View>

      <ImageBackground
        source={ScanCorners}
        resizeMode="contain"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: height / 2,
          marginVertical: 20,
        }}>
        <View
          style={{
            borderRadius: 50,
            width: '100%',
            height: height / 2.7,
            paddingHorizontal: 20,
          }}>
          <Camera
            style={{flex: 1}}
            codeScanner={codeScanner}
            device={device}
            isActive={true}
          />
        </View>
      </ImageBackground>

      <View
        style={{
          flexDirection: 'row',
          gap: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Pressable>
          <GalleryIcon />
        </Pressable>
        <Pressable
          style={{
            backgroundColor: Colors.primary,
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: 50,
          }}>
          <ScanWhiteIcon />
        </Pressable>
        <Pressable onPress={toggleCamera}>
          {!flashOn ? <BulbIcon /> : <BulbRedIcon />}
        </Pressable>
      </View>
    </CustomView>
  );
}

export default Scan;
