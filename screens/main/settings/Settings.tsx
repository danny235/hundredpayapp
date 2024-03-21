import React from 'react';
import {Image, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import CustomView from '../../../components/Views/CustomView';
import Avatar from "../../../assets/images/DashboardEmojis/Avatar-a.png"
import { BoldText, LightText, MediumText } from '../../../components/styles/styledComponents';
import { Colors } from '../../../components/Colors';
import { CSServiceIcon, CopyIcon, EditIcon, InfoIcon, RateIcon, ReferralIcon, SecuritySafeIcon, TransactionIcon } from '../../../components/SvgAssets';
import { useToast } from '../../../components/CustomToast/ToastContext';
import Clipboard from '@react-native-clipboard/clipboard';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/AppStacks';

type SettingsT = {
  navigation: NavigationProp<RootStackParamList>;
};

export default function Settings({navigation}: SettingsT): React.JSX.Element {
  const {fontScale} = useWindowDimensions()
  const {showToast} = useToast();
  const settingList = [
    {
      id: 1,
      title: 'Security',
      description: 'Password, Biometrics, Payment Pin, Freeze Account...',
      icon: <SecuritySafeIcon width={27} height={27} />,
      onPress: () => null,
    },
    {
      id: 2,
      title: 'Transactions',
      description: 'View your transaction history here',
      icon: <TransactionIcon />,
      onPress: () => null,
    },
    {
      id: 3,
      title: 'Referrals',
      description: 'Refer your friends and earn $Pay Tokens',
      icon: <ReferralIcon />,
      onPress: () => null,
    },
    {
      id: 4,
      title: 'Customer Service',
      description: 'Get solutions to your problem here',
      icon: <CSServiceIcon />,
      onPress: () => null,
    },
    {
      id: 5,
      title: 'Rate Our App',
      description: 'Rate our app on app store and google play store.',
      icon: <RateIcon />,
      onPress: () => null,
    },
    {
      id: 6,
      title: 'About 100Pay',
      description: 'Know more about 100 Pay.',
      icon: <InfoIcon />,
      onPress: () => null,
    },
  ];
  const copyToClipboard = () => {
    Clipboard.setString('234gh6');
    showToast('Copied successfully');
  };
  return (
    <CustomView>
      <ScrollView>
        <View
          style={{
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 30,
          }}>
          <Image style={styles.userPhoto} source={Avatar} />
          <BoldText
            style={{
              textTransform: 'capitalize',
              fontSize: 15 / fontScale,
              color: Colors.balanceBlack,
            }}>
            Daniel Barima
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
          <View style={{flexDirection: "row", gap: 20, marginVertical: 20, }}>
            <Pressable style={styles.pressableCTA}>
              <MediumText
                style={{
                  textTransform: 'uppercase',
                  fontSize: 12 / fontScale,
                  color: Colors.balanceBlack,
                }}>
                234gh6
              </MediumText>
              <CopyIcon />
            </Pressable>
            <Pressable onPress={()=>navigation.navigate("EditProfile")} style={styles.pressableCTA}>
              <MediumText
                style={{
                  fontSize: 12 / fontScale,
                  color: Colors.balanceBlack,
                }}>
                Edit Profile
              </MediumText>
              <EditIcon />
            </Pressable>
          </View>

          <View>
            {settingList.map((setting, index)=> {
              return (
                <Pressable
                  key={setting.id}
                  style={{
                    gap: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 15,
                  }}>
                  {setting.icon}
                  <View style={{gap: 6}}>
                    <MediumText
                      style={{
                        fontSize: 15 / fontScale,
                        color: Colors.balanceBlack,
                      }}>
                      {setting.title}
                    </MediumText>
                    <LightText
                      style={{
                        fontSize: 13 / fontScale,
                        color: Colors.grayText,
                      }}>
                      {setting.description}
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
  userPhoto: {
    width: 90, 
    height: 90,
    borderRadius: 90
  },
  pressableCTA: {
    paddingVertical: 13,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    backgroundColor: Colors.memojiBackground,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexGrow: 1
  }
})