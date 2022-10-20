import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  title: {
    padding: 15,
    fontSize: 20,
    fontWeight: '600',
    color: '#590696',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 10,
  },
  name: {
    color: '#C70A80',
    alignSelf: 'center',
    fontSize: 15,
    paddingVertical: 10,
    fontWeight: '600',
  },
  image: {
    width: Width / 2,
    height: 150,
    resizeMode: 'contain',
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  sepratorView: {marginHorizontal: 20, height: 1, backgroundColor: '#37E2D5'},
});

export default styles;
