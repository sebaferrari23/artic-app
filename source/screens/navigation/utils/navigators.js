/** @format */

import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

export const options = { gestureEnabled: false, headerShown: false };
export const Stack = createStackNavigator();
export const Tab = createBottomTabNavigator();

export const getScreenComponent = (component, name) => {
  return <Stack.Screen component={component} key={name} name={name} options={options} />;
};

export const getStackComponent = (RootScreen, rootScreenName, screens) => {
  return memo(() => (
    <Stack.Navigator initialRouteName={rootScreenName} key={rootScreenName}>
      {getScreenComponent(RootScreen, rootScreenName)}
      {screens}
    </Stack.Navigator>
  ));
};

export const getTabScreenComponent = (component, name) => {
  return <Tab.Screen component={component} key={name} name={name} options={options} />;
};
