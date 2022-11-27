/** @format */

import { StyleSheet } from 'react-native';

import { fonts } from '~/constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 56,
    justifyContent: 'space-between',
    zIndex: 999,
    paddingHorizontal: 25,
  },
  buttons: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    zIndex: 1,
    color: 'black',
    fontFamily: fonts.primary,
    marginLeft: 25,
  },
});
