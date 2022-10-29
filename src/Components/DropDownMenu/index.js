import React, {useState} from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {LinearGradients} from '@Components';
import * as Screen from '@screen';

import styles from './styles';

const DropDownMenu = props => {
  const [open, setIsOpen] = useState(false);

  const array = props.arrayName;

  const navigation = useNavigation();

  const toggleOpen = () => {
    setIsOpen(value => !value);

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View style={styles.accountBudgetView}>
      <TouchableOpacity
        onPress={toggleOpen}
        style={[styles.heading, {width: props.width}]}
        activeOpacity={0.6}>
        <Icon
          name={open ? 'chevron-up' : 'chevron-down'}
          size={15}
          color="black"
        />
        <Text style={[styles.textView3, {marginLeft: props.titlemarginLeft}]}>
          {props.title}
        </Text>
        <MaterialCommunityIcons
          name={props.touchbleIcon}
          color={'#000000'}
          size={19}
        />
      </TouchableOpacity>
      <LinearGradients marginRight={1} />

      {array
        .filter((comp, index) => {
          return props.title === 'Accounts' ? index < 4 : index === 6;
        })
        .map((views, index) => {
          return (
            <View
              style={[styles.list, open ? styles.hidden : undefined]}
              key={index}>
              <View style={styles.part2}>
                <TouchableOpacity
                  onPress={() => navigation.navigate(views.component)}>
                  <Text style={[styles.textView, {color: views.color}]}>
                    {views.name}
                  </Text>
                </TouchableOpacity>
              </View>
              <LinearGradients marginRight={1} />
            </View>
          );
        })}
    </View>
  );
};

export default DropDownMenu;
