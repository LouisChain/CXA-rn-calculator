import React from 'react';
import {View} from 'react-native';
import {KEYPADs, OPERATOR} from '../utils/consts';
import KeypadButton from './KeypadButton';

function KeypadView(props) {
  const {actions} = props;
  const onKeypadPress = (value) => {
    switch (value) {
      case OPERATOR.ADD:
        actions.addOperator(OPERATOR.ADD);
        break;
      case OPERATOR.SUBSTRACT:
        actions.addOperator(OPERATOR.SUBSTRACT);
        break;
      case OPERATOR.MULTIPLY:
        actions.addOperator(OPERATOR.MULTIPLY);
        break;
      case OPERATOR.DEVIDE:
        actions.addOperator(OPERATOR.DEVIDE);
        break;
      case OPERATOR.CLEAR:
        actions.clear();
        break;
      case OPERATOR.EQUAL:
        actions.calculateResult();
        break;
      default:
        actions.getNumber(value);
    }
  };

  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {KEYPADs.map((item, index) =>
        <KeypadButton key={index} text={item.toString()} onPress={() => onKeypadPress(item)}/>,
      )}
    </View>
  );
}


export default KeypadView;
