import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
{
  /*Use this Component for starting  border  blur*/
}
const LinearGradients = props => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.0}}
      end={{x: 0.4, y: 0}}
      colors={['#FFFFFF', '#C0C0C0']}
      style={{
        height: 1,
        width: '90%',
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
      }}
    />
  );
};

export default LinearGradients;
