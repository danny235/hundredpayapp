import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AssetScreen,
  DiscoverScreen,
  GenerateRequestLinkScreen,
  HomeScreen,
  NotificationScreen,
  OnboardingScreen,
  PaymentCompleteScreen,
  RecieveModalScreen,
  RootAuth,
  ScanScreen,
  SettingsScreen,
  SignIn,
  TransactionPinScreen,
} from '../screens';
import MainTabs from './MainTabs';
import CreateAccount from '../screens/authentication/CreateAccount';
import PhoneNumber from '../screens/authentication/PhoneNumber';
import SetPassword from '../screens/authentication/SetPassword';
import ForgotPassword from '../screens/authentication/ForgotPassword';
import SecureCode from '../screens/authentication/SecureCode';
import NewPassword from '../screens/authentication/NewPassword';
import PayHome from '../screens/main/home/PayFlow/Pay';
import SendPayment from '../screens/main/home/PayFlow/SendPayment';
import ConfirmPayment from '../screens/main/home/PayFlow/ConfirmPayment';

export type RootStackParamList = {
  Home: undefined;
  Pay: undefined;
  Scan: undefined;
  SendPayment: undefined;
  ConfirmPayment: undefined;
  TransactionPin: undefined;
  PaymentComplete: undefined;
  GenerateCode: undefined;
  Notification: undefined;
  Recieve: undefined;
  
  // Define other screens and their parameters here
};

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();
const AssetStack = createNativeStackNavigator();

export function HomeStackScreen(): React.JSX.Element {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "ios"
      }}>
      <HomeStack.Screen name="Dashboard" component={HomeScreen} />
      <HomeStack.Screen name="Pay" component={PayHome} />
      <HomeStack.Screen name="Scan" component={ScanScreen} />
      <HomeStack.Screen name="SendPayment" component={SendPayment} />
      <HomeStack.Screen name="ConfirmPayment" component={ConfirmPayment} />
      <HomeStack.Screen name="TransactionPin" component={TransactionPinScreen} />
      <HomeStack.Screen name="PaymentComplete" component={PaymentCompleteScreen} />
      <HomeStack.Screen name="Notification" component={NotificationScreen} />

      <HomeStack.Screen options={{
        presentation: "transparentModal",
        animation: "fade_from_bottom"
      }} name='Recieve' component={RecieveModalScreen} />
    </HomeStack.Navigator>
  );
}

export function DiscoverStackScreen(): React.JSX.Element {
  return (
    <DiscoverStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <DiscoverStack.Screen name="DiscoverStack" component={DiscoverScreen} />
      <DiscoverStack.Screen name="GenerateCode" component={GenerateRequestLinkScreen} />
    </DiscoverStack.Navigator>
  );
}

export function SettingsStackScreen(): React.JSX.Element {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingsStack.Screen name="SettingsStack" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

export function AssetStackScreen(): React.JSX.Element {
  return (
    <AssetStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AssetStack.Screen name="AssetStack" component={AssetScreen} />
    </AssetStack.Navigator>
  );
}

export default function NavigationContent(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen
          name="MainTabs"
          options={{headerShown: false}}
          component={MainTabs}
        />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="RootAuth" component={RootAuth} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SecureCode" component={SecureCode} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
