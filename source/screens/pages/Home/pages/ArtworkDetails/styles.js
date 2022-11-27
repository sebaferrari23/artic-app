/** @format */

import { StyleSheet } from 'react-native';
import {
  ANDROID_NAVIGATION_BAR_HEIGHT,
  fonts,
  GRAY_DARK_COLOR,
  IOS_NAVIGATION_BAR_HEIGHT,
  IS_ANDROID,
} from '~/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: IS_ANDROID ? ANDROID_NAVIGATION_BAR_HEIGHT : IOS_NAVIGATION_BAR_HEIGHT,
  },
  background: {
    backgroundColor: 'black',
    height: 500,
  },
  blurImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.8,
    zIndex: 1,
  },
  artWorkImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.8,
    zIndex: 5,
  },
  toolBar: {
    position: 'absolute',
    width: '100%',
    zIndex: 10,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flex: 1,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    color: 'black',
    fontFamily: fonts.primary,
    marginBottom: 5,
  },
  artist: {
    fontSize: 14,
    lineHeight: 22,
    color: GRAY_DARK_COLOR,
    marginBottom: 20,
  },
  tableRow: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    borderRadius: 10,
  },
  tableTitle: {
    fontFamily: fonts.primary,
    color: 'black',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '700',
    marginRight: 20,
  },
  tableValue: {
    fontFamily: fonts.primary,
    color: 'black',
    fontSize: 12,
    flex: 1,
    textAlign: 'right',
  },
});
