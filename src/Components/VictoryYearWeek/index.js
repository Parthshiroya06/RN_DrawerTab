import React from 'react';
import {View} from 'react-native';
import {
  VictoryAxis,
  VictoryArea,
  VictoryBar,
  VictoryChart,
  VictoryZoomContainer,
} from 'victory-native';
import {victory4, barColors} from '@constants';
import styles from './styles';

const VictoryYearWeek = props => {
  return (
    <View style={styles.part2} pointerEvents="auto">
      {/* it is main chart component. if scrollin necessary so add containerComponent  */}
      <VictoryChart
        standalone={true}
        width={375}
        height={240}
        domain={props.domains}
        containerComponent={props.zoomDs}>
        <VictoryArea
          name="area"
          style={{
            data: {
              opacity: ({datum}) => (datum % 12 === 0 ? 1 : 0.4),
              fill: '#C1DDEA',
            },
          }}
          interpolation="natural"
          data={victory4}
        />
        <VictoryChart domainPadding={{x: 5}}>
          <VictoryBar
            data={props.data}
            cornerRadius={{top: 4, bottom: 4}}
            style={{
              data: {
                fill: ({datum}) => barColors[datum._x % 3],
                width: 8,
              },
            }}
            x={props.x}
            y={props.y}
          />
          {/* to use define X or Y axis in graph in rigth ,left,top,bottom*/}
          <VictoryAxis
            style={{
              axis: {stroke: 'transparent'},
              tickLabels: {fill: props.selected ? '#C1DDEA' : '#1898CE'},
            }}
            dependentAxis
            orientation="right"
            tickValues={[20, 60, 100]}
            tickFormat={t => `${Math.round(t)}%`}
          />
          <VictoryAxis
            style={{
              tickLabels: {fill: '#1898CE'},
              axis: {stroke: 'transparent'},
            }}
            tickValues={props.names}
          />
        </VictoryChart>
      </VictoryChart>
    </View>
  );
};

export default VictoryYearWeek;
