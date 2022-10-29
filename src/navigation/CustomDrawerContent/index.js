import React, {useState, useEffect, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {DropDownMenu, CompName, LinearGradients, Label} from '@Components';
import {mapArray} from '@constants';
import styles from './styles';

const CustomDrawerContent = props => {
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',

          alignContent: 'flex-end',
        }}>
        <View style={styles.part1}>
          <TouchableOpacity
            style={{width: '10%'}}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());
            }}>
            <MaterialCommunityIcons
              name={'close'}
              color={'#000000'}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '10%'}}
            onPress={() =>
              props.navigation.dispatch(DrawerActions.openDrawer())
            }>
            <MaterialCommunityIcons name={'menu'} color={'#000000'} size={24} />
          </TouchableOpacity>
        </View>
        <DropDownMenu
          title={'Accounts'}
          width={'38%'}
          arrayName={mapArray}
          touchbleIcon={'account-circle-outline'}
        />
        <CompName
          component={'Investment'}
          name={'Investment Account'}
          icon={'gbp'}
          marginRight={15}
        />

        <LinearGradients marginLeft={28} />
        <DropDownMenu
          title={'Budget'}
          width={'37%'}
          arrayName={mapArray}
          touchbleIcon={'currency-cny'}
          titlemarginLeft={5}
        />

        <CompName
          component={'Option'}
          name={'Option'}
          icon={'gear'}
          marginRight={11}
        />
        <LinearGradients marginLeft={28} />
        <Label />
      </Animated.View>
    </View>
  );
};

export default CustomDrawerContent;
