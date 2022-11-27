/** @format */

import { StyleSheet } from 'react-native';

import { IS_ANDROID, IOS_NAVIGATION_BAR_HEIGHT, ANDROID_NAVIGATION_BAR_HEIGHT, NAVIGATION_BTN } from '~/constants';

export const styles = StyleSheet.create({
  iconSelect: (isSelected) => ({
    tintColor: isSelected ? NAVIGATION_BTN.selected : NAVIGATION_BTN.unSelected,
    marginBottom: 5,
    alignSelf: 'center',
  }),
  tab: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
  },
  tabDisabled: {
    opacity: 0.5,
  },
  container: {
    backgroundColor: 'white',
    elevation: 10,
    paddingTop: 10,
    flexDirection: 'row',
    height: IS_ANDROID ? ANDROID_NAVIGATION_BAR_HEIGHT : IOS_NAVIGATION_BAR_HEIGHT,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
