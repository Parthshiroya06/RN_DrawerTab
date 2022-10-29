import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {VictoryZoomContainer} from 'victory-native';
import {VictoryYearWeek, Buttons} from '@Components';
import {victory, victory2, years, week, array} from '@constants';
import styles from './styles';

const Mpesa = props => {
  const [selected, setSelected] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
        <MaterialCommunityIcons name={'menu'} color={'#000000'} size={30} />
      </TouchableOpacity>

      {/*Custom Button*/}
      <Buttons onPress={() => setSelected(!selected)} selected2={selected} />

      <View style={styles.part2}>
        {selected ? (
          <VictoryYearWeek
            data={victory}
            selected={selected}
            domains={{y: [0, 100]}}
            names={years}
            x="year"
            y="persent"
            zoomDs={
              <VictoryZoomContainer
                dimension="x"
                zoomDimension={'x'}
                zoomDomain={{x: [1, 7], y: [0, 100]}}
              />
            }
          />
        ) : (
          <VictoryYearWeek data={victory2} selected={selected} names={week} />
        )}
      </View>
    </View>
  );
};

export default Mpesa;
