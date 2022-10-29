import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  accountBudgetView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  list: {
    overflow: 'hidden',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  part2: {
    width: '100%',

    justifyContent: 'center',
    height: 35,
  },
  heading: {
    height: 35,

    marginRight: 18,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hidden: {
    height: 0,
  },
  textView: {
    marginRight: 55,
    textAlign: 'right',

    fontSize: 13,
  },
  textView3: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000000',
  },
});

export default styles;
