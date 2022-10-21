import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

import { GetAlbumTracks, GetArtistsPopularity } from '../../api/Api';
import styles from './AlbumStyle';

const AlbumSong = () => {
  const route = useRoute();
  const id = route?.params?.id;
  const images = route?.params?.images;
  const artists = route?.params?.artists;
  const navigation = useNavigation();

  const [albumSongData, setAlbumSongData] = useState({});
  const [popularity, setPopularity] = useState(0);

  const getAlbumTracks = async () => {
    try {
      let res = await GetAlbumTracks(id);
      let pop = await GetArtistsPopularity(id);
      setPopularity(pop?.data?.popularity);
      if (res?.status === 200) {
        setAlbumSongData(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAlbumTracks();
  }, []);

  const onPress = playId => navigation.navigate('PlaySong', { id: playId });

  const renderItem = ({ item, indx }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(item?.id)}>
      <Image
        style={styles.image}
        source={{
          uri: images[0]?.url,
        }}
      />
      <View style={styles.textContanier}>
        <Text style={styles.name}>{item?.name} </Text>
        <View style={{ flexDirection: 'row' }}>
          {artists.map(ite => (
            <Text style={styles.artist}>{`${ite?.name}, `} </Text>
          ))}
        </View>
        <Text style={styles.artist}>{`Popularity ${popularity}`}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.title}>Play List</Text>

      <FlatList
        data={albumSongData?.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default AlbumSong;
