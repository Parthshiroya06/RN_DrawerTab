import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const CompName = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.part2}>
      <TouchableOpacity
        style={styles.touchbleButton}
        onPress={() => navigation.navigate(props.component)}>
        <Text style={[styles.textView, {marginRight: props.marginRight}]}>
          {props.name}
        </Text>
        <Icon name={props.icon} color={'#000000'} size={19} />
      </TouchableOpacity>
    </View>
  );
};

export default CompName;
