/** @format */

import React, { memo, useCallback, useEffect, useRef } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { useDispatch, useMappedState } from 'redux-react-hook';

import { changeCurrentIndexTab, appSelector } from '~/store/modules';
import { NAVIGATION } from '~/constants';
import { Icon } from '~/components';
import { useLayoutAnimation } from '~/hooks';

import { styles } from './styles';

const ANIMATION_CONFIG = {
  duration: 150,
  create: { type: 'easeInEaseOut', property: 'opacity' },
  delete: { type: 'easeInEaseOut', property: 'opacity' },
  update: { type: 'easeInEaseOut', property: 'opacity' },
};

const ICONS_MAP = {
  [NAVIGATION.TAB.HOME]: 'home',
  [NAVIGATION.TAB.FAVORITES]: 'star',
};

export const NavigationBar = memo(({ state, navigation }) => {
  const dispatch = useDispatch();
  const activeIndex = useMappedState(appSelector);
  const nextIndex = useRef(state.index);
  const layoutAnimationHandler = useLayoutAnimation(ANIMATION_CONFIG);

  /* this is necessary to track the navigation index
  when navigation is dispatched from other components */
  useEffect(() => {
    if (state.index !== nextIndex.current) {
      nextIndex.current = state.index;
      layoutAnimationHandler(() => dispatch(changeCurrentIndexTab(state.index)));
    }
  }, [state.index, layoutAnimationHandler, dispatch]);

  const handleNavigate = useCallback(
    (index) => {
      return () => {
        if (nextIndex.current === index) {
          navigation.dispatch(StackActions.popToTop());
        } else {
          navigation.reset({ index, routes: state.routes });
        }
        nextIndex.current = index;
        layoutAnimationHandler(() => dispatch(changeCurrentIndexTab(index)));
      };
    },
    [dispatch, layoutAnimationHandler, navigation, state.routes],
  );

  return (
    <View style={[styles.container]}>
      {state.routeNames.map((routeName, index) => {
        const isDisabled = false;
        const isSelected = index === activeIndex.currentIndex;

        if (!routeName) {
          return null;
        }
        const renderIcon = () => {
          return <Icon size={32} name={ICONS_MAP[routeName]} style={styles.iconSelect(isSelected)} />;
        };

        return (
          <View key={routeName}>
            <TouchableWithoutFeedback disabled={isDisabled} onPress={handleNavigate(index)}>
              <View style={[styles.tab, isDisabled && styles.tabDisabled]}>
                {renderIcon(index === activeIndex.currentIndex)}
              </View>
            </TouchableWithoutFeedback>
          </View>
        );
      })}
    </View>
  );
});
