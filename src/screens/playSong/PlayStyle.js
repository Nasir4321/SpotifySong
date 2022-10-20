import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  artists: {
    color: '#C70A80',
    fontSize: 20,
    fontFamily: 'fantasy',
    fontWeight: '600',
  },
  name: {
    color: '#590696',
    fontSize: 25,
    fontFamily: 'fantasy',
    fontWeight: '600',
    paddingVertical: 10,
  },
  textContanier: {
    flex: 1,
    paddingLeft: 10,
  },
  image: {
    width: Width,
    height: Height / 2,
    resizeMode: 'cover',
  },
  mainContainer: {
    flex: 1,
  },
});

export default styles;
