import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
import PropTypes from 'prop-types';

const btWidth = Dimensions.get('window').width / 4;

export default class KeypadButton extends Component {

  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
  };

  render() {
    return <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
      <Text style={styles.text}>
        {this.props.text}
      </Text>
    </TouchableOpacity>;
  }

}


const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    backgroundColor: 'white',
    width: btWidth,
    height: btWidth,
    borderColor: 'orange',
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
  },

});
