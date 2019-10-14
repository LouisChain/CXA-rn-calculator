import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {getResult} from '../utils/operation';

const btWidth = Dimensions.get('window').width / 4;

function ResultView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {getResult(props.value)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    minHeight: btWidth,
    borderColor: 'orange',
    paddingHorizontal: 16,
    borderWidth: 0.5,
  },
  text: {
    textAlign: 'right',
    fontSize: 32,
    color: 'black',
  },

});

export default ResultView;
