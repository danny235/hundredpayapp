import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DiscoverScreen,
  HomeScreen,
  OnboardingScreen,
  RootAuth,
  SettingsScreen,
  SignIn,
} from '../screens';
import MainTabs from './MainTabs';
import CreateAccount from '../screens/authentication/CreateAccount';
import PhoneNumber from '../screens/authentication/PhoneNumber';
import SetPassword from '../screens/authentication/SetPassword';
import ForgotPassword from '../screens/authentication/ForgotPassword';
import SecureCode from '../screens/authentication/SecureCode';
import NewPassword from '../screens/authentication/NewPassword';

export type RootStackParamList = {
  Home: undefined;
  // Define other screens and their parameters here
};

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const DiscoverStack = createNativeStackNavigator();

export function HomeStackScreen(): React.JSX.Element {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Dashboard" component={HomeScreen} />
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

export default function NavigationContent(): React.JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
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
      <Stack.Screen
        name="MainTabs"
        options={{headerShown: false}}
        component={MainTabs}
      />
    </Stack.Navigator>
  );
}
