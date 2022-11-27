/** @format */

import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const ToolBar = memo(({ LeftButtonComponent = null, RightButtonComponent = null, style = null, title = '' }) => (
  <View style={[styles.container, style]}>
    <Text allowFontScaling={false} style={styles.title}>
      {title}
    </Text>
    <View style={styles.buttons}>
      {LeftButtonComponent || <View />}
      {RightButtonComponent || <View />}
    </View>
  </View>
));
