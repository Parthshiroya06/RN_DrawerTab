import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LinearGradients} from '@Components';
import {mapArray} from '@constants';

import styles from './styles';

const Label = props => {
  const navigation = useNavigation();

  return mapArray
    .filter((comp, index) => {
      return index > 6;
    })
    .map((array, index) => {
      return (
        <View key={index}>
          <View style={styles.part4}>
            <TouchableOpacity
              onPress={() => navigation.navigate(array.component)}>
              <Text style={[styles.textView2, {color: array.color}]}>
                {array.name}
              </Text>
            </TouchableOpacity>
          </View>

          {array.name === 'Version' ? null : (
            <LinearGradients marginLeft={28} />
          )}
        </View>
      );
    });
};

export default Label;
