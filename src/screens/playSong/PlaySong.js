import React, { useEffect, useState } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';

import { useRoute } from '@react-navigation/native';
import { GetTrack } from '../../api/Api';
import styles from './PlayStyle';

const PlaySong = () => {
  const route = useRoute();
  const id = route?.params?.id;

  const [trackData, setTrackData] = useState({});

  const timeConversion = time => {
    let sec = parseFloat(time) / 1000;
    let min = sec / 60;
    return Math.round(min * 100) / 100;
  };

  const getTrack = async () => {
    try {
      let res = await GetTrack(id);
      if (res.status === 200) {
        setTrackData(res?.data);
      }
    } catch (erro) {
      console.log(erro);
    }
  };

  useEffect(() => {
    getTrack();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image
        style={styles.image}
        source={{
          uri: trackData?.album?.images[1]?.url,
        }}
      />
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={styles.name}>{trackData?.name}</Text>
        <View style={{ flexDirection: 'row' }}>
          {trackData?.artists?.map(ite => (
            <Text style={styles.artists}>{`${ite?.name}, `} </Text>
          ))}
        </View>
        <Text style={styles.artists}>{` ${trackData?.album?.album_type} ${trackData?.album?.name}`}</Text>

        <Text style={{ ...styles.artists, color: '#37E2D5' }}>
          {`${'\n'}duration ${timeConversion(trackData?.duration_ms)}`}
        </Text>
      </View>
    </ScrollView>
  );
};

export default PlaySong;
