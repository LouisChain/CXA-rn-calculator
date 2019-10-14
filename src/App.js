/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import Header from './components/Header';
import KeyPadView from './components/KeypadView';
import ResultView from './components/ResultView';
import {OPERATOR} from './utils/consts';
import {calculate} from './utils/operation';

function App(props) {
  const initState = {
    operatorAdded: false,
    number1: '1',
    number2: '1',
    currentValue: '0',
    operator: '',
  };
  const [state, setState] = useState(initState);
  const actions = {
    addOperator: (operator) => {
      let number1;
      if (state.operatorAdded && state.operator !== OPERATOR.EQUAL) {
        setState({
          ...state,
          operator,
        });
        return;
      }
      if (state.operator !== '') {
        number1 = calculate(state.number1, state.currentValue, state.operator);
      } else {
        number1 = state.currentValue;
      }
      let operatorAdded = (operator !== '');
      let _state = {
        ...state,
        operatorAdded,
        number1: number1,
        currentValue: number1,
        operator,
      };
      setState(_state);
    },
    getNumber: (number) => {
      if (state.operatorAdded) {
        state.currentValue = '0';
      }
      let _state = {
          ...state,
          currentValue: state.currentValue === '0' ? number.toString() : state.currentValue + number.toString(),
          operatorAdded: false,
        }
      ;
      setState(_state);
    },
    calculateResult: () => {
      let number2 = state.currentValue;
      let _state = {
        ...state,
        number1: number2,
        currentValue: calculate(state.number1, number2, state.operator),
        operatorAdded: true,
        operator: OPERATOR.EQUAL,
      };
      setState(_state);
    },
    clear: () => {
      setState(initState);
    },
  };

  return (
    <View>
      <StatusBar barStyle="dark-content"/>
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Header title={'My Calculator'}/>
          <View>
            <ResultView value={state.currentValue}/>
            <KeyPadView actions={actions}/>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};


export default App;
