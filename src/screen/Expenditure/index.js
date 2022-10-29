import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Expenditure = props => {
  return (
    <View style={{flex: 1, alignItems: 'flex-end', margin: 10}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
        <MaterialCommunityIcons name={'menu'} color={'#000000'} size={30} />
      </TouchableOpacity>
      <Text>Expenditure</Text>
    </View>
  );
};

export default Expenditure;

const styles = StyleSheet.create({});
