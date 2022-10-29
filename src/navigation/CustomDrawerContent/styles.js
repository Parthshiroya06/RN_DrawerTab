import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    elevation: 5,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    alignItems: 'flex-end',
  },
  part1: {
    flexWrap: 'wrap',
    marginLeft: 30,
    marginTop: 5,
    width: '85%',
    alignContent: 'space-between',
    justifyContent: 'center',
    height: 45,
  },
});

export default styles;
