import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  title: {
    padding: 15,
    fontSize: 20,
    color: '#590696',
    fontWeight: '600',
  },
  itemContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 7,
    borderColor: '#BDBDBD',
    borderWidth: 1,
  },
  artist: {
    color: '#37E2D5',
    fontSize: 15,
  },
  name: {
    color: '#C70A80',
    fontSize: 18,
    paddingVertical: 10,
  },
  textContanier: {
    flex: 1,
    paddingLeft: 10,
  },
  image: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: Width / 3,
    height: 150,
    resizeMode: 'contain',
  },
  mainContainer: {
    flex: 1,
  },
});

export default styles;
