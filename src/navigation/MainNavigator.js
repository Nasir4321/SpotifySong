import React from 'react';

import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import RecommendedSong from '../screens/recommendedSong/RecommendedSong';
import AlbumSong from '../screens/albumSong/AlbumSong';
import PlaySong from '../screens/playSong/PlaySong';

enableScreens();
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="RecommendedSong" component={RecommendedSong} />
      <Stack.Screen name="AlbumSong" component={AlbumSong} />
      <Stack.Screen name="PlaySong" component={PlaySong} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
