/** @format */

import React, { memo } from 'react';
import { SafeAreaView } from 'react-native';

import { ToolBar } from '~/components';
import { ArtworksList } from './components';

import { styles } from './styles';

export const Home = memo(() => {
  return (
    <SafeAreaView style={styles.container}>
      <ToolBar title={'Artworks'} />
      <ArtworksList />
    </SafeAreaView>
  );
});
