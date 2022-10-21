import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  View,
  RefreshControl,
  Image,
  StatusBar,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { getCountry } from 'react-native-localize';

import { GetRecommendations } from '../../api/Api';
import styles from './RecommendedStyle';

const RecommendedSong = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState(10);
  const [refreshing, setRefreshing] = useState(false);
  const [recommendedData, setRecommendedData] = useState([]);

  const getRcommendedSong = async () => {
    try {
      let data = await GetRecommendations(getCountry(), page);
      if (data?.status === 200) {
        setRecommendedData(data?.data?.tracks);
        setRefreshing(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onPress = (id, images, artists) =>
    navigation.navigate('AlbumSong', {
      id: id,
      images: images,
      artists: artists,
    });

  const renderItem = ({ item, indx }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        onPress(item?.album?.id, item?.album?.images, item?.artists)
      }>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: item?.album?.images[0]?.url,
          }}
        />
        <Text style={styles.name}>
          {`${item?.album?.name} (${item?.album?.total_tracks})`}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    getRcommendedSong();
  }, [page]);

  const sepraterItem = () => <View style={styles.sepratorView} />;

  const seeMore = () => setPage(per => (per += 10));

  const onRefresh = () => getRcommendedSong();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <Text style={styles.title}>Recommended for today</Text>

      <FlatList
        data={recommendedData}
        renderItem={renderItem}
        numColumns={2}
        ItemSeparatorComponent={sepraterItem}
        keyExtractor={item => item.id}
        onEndReached={seeMore}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default RecommendedSong;
