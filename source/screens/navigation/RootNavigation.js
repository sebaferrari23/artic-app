/** @format */

import React, { memo, useMemo } from 'react';
import { map } from 'lodash';

import { NAVIGATION } from '~/constants';
import { setRootTabNavigation } from '~/utils';

import { NavigationBar } from '../components';

import { Tab, getScreenComponent, getTabScreenComponent, getStackComponent } from './utils';
import { ROOT_SCREENS, SCREENS } from './screens';

const TABS = [
  [NAVIGATION.TAB.HOME, NAVIGATION.STACK.HOME],
  [NAVIGATION.TAB.FAVORITES, NAVIGATION.STACK.FAVORITES],
];

const TabBarComponent = (props) => {
  setRootTabNavigation(props.navigation);

  return <NavigationBar key="navbar" {...props} />;
};

const TabNavigation = memo(() => {
  const screens = useMemo(() => {
    return map(SCREENS, getScreenComponent);
  }, []);

  return (
    <Tab.Navigator initialRouteName={NAVIGATION.TAB.HOME} tabBar={(props) => <TabBarComponent {...props} />}>
      {TABS.map(([name, rootScreenName]) => {
        const stack = getStackComponent(ROOT_SCREENS[name], rootScreenName, screens);
        return getTabScreenComponent(stack, name);
      })}
    </Tab.Navigator>
  );
});

export const RootNavigation = memo(() => {
  return <TabNavigation />;
});
