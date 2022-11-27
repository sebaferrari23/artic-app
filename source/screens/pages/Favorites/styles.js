/** @format */

import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR } from '~/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  favoritesList: {
    paddingHorizontal: 16,
    flex: 1,
  },
  separator: {
    height: 16,
  },
  footer: {
    height: 64,
  },
});
