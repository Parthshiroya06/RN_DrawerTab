import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {CustomDrawerContent} from '@navigation';
import * as Screen from '@screen';
import {mapArray} from '@constants';

const Drawer = createDrawerNavigator();

const DrawerTabs = props => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      initialRouteName="Mpesa"
      screenOptions={{
        drawerType: 'front',
        drawerPosition: 'right',
        overlayColor: '#FFFFFF',
        headerShown: false,
        drawerStyle: {
          width: '85%',
          marginLeft: 60,

          justifyContent: 'center',
        },
        drawerLabelStyle: {
          fontFamily: 'serif',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          textAlign: 'right',
          flexDirection: 'row-reverse',
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {mapArray.map((v, i) => {
        return (
          <Drawer.Screen
            key={i}
            name={v.component}
            component={Screen[v.component]}
          />
        );
      })}
    </Drawer.Navigator>
  );
};

export default DrawerTabs;
