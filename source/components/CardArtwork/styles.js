/** @format */

import { StyleSheet } from 'react-native';
import { BRAND_COLOR, fonts, GRAY_DARK_COLOR } from '~/constants/theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flex: 1,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: fonts.primary,
    color: 'black',
  },
  artist: {
    fontSize: 12,
    color: GRAY_DARK_COLOR,
    marginBottom: 10,
    fontFamily: fonts.primary,
  },
  type: {
    color: BRAND_COLOR,
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
    fontFamily: fonts.primary,
  },
  image: {
    alignSelf: 'stretch',
    width: 90,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    backgroundColor: 'black',
  },
  favIcon: {
    alignSelf: 'flex-start',
    marginRight: 16,
    marginTop: 16,
  },
});
