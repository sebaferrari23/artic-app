/** @format */

import React, { memo } from 'react';
import { Image, TouchableOpacity } from 'react-native';

export const Icon = memo(
  ({ styleBtn = null, enable = false, onPress = () => {}, size, color, name, style, resizeMode = 'contain' }) => (
    <TouchableOpacity onPress={() => onPress()} disabled={!enable} style={[styleBtn]}>
      <Image
        resizeMethod="resize"
        resizeMode={resizeMode}
        source={name ? { uri: name } : null}
        style={[{ width: size, height: size, tintColor: color }, style]}
      />
    </TouchableOpacity>
  ),
);
