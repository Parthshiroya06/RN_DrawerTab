import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {array} from '@constants';
import styles from './styles';

// create Custom Button for Graph
const Buttons = props => {
  return (
    <View style={styles.part1}>
      {array.map((v, i) => {
        return (
          <TouchableOpacity
            key={i}
            style={styles.button2}
            onPress={props.onPress}>
            <Text style={{fontSize: 19, color: props.selected2 ? v.x : v.x2}}>
              {v.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Buttons;
