import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../components/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { DiscoverStackScreen, HomeStackScreen, SettingsStackScreen } from './AppStacks';
import { DiscoverIcon, HomeIcon, SettingsIcon } from '../components/SvgAssets';



const Tab = createBottomTabNavigator();

export default function MainTabs():React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.mordernBlack,
        tabBarLabelStyle: {
          fontSize: 12,
          letterSpacing: 0.5,
          fontFamily: 'SpaceGrotesk-Bold',
        }
      }}>
      <Tab.Screen
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <HomeIcon  color={color}  />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === '') return;
            if (routeName === 'Dashboard') return;
            return {display: 'none'};
          })(route),
        })}
        name="Home"
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <DiscoverIcon  color={color} />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === '') return;
            if (routeName === 'DiscoverStack') return;
            return {display: 'none'};
          })(route),
        })}
        name="Discover"
        component={DiscoverStackScreen}
      />
      <Tab.Screen
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <SettingsIcon  color={color}  />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            console.log(routeName);
            if (routeName === '') return;
            if (routeName === 'SettingsStack') return;
            return {display: 'none'};
          })(route),
        })}
        name="Settings"
        component={SettingsStackScreen}
      />
    </Tab.Navigator>
  );
}