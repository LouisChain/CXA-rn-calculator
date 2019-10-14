import {OPERATOR} from './consts';

const calculate = (number1, number2, operator) => {
  let _number1 = Number(number1);
  let _number2 = Number(number2);

  switch (operator) {
    case OPERATOR.ADD:
      return _number1 + _number2;
    case OPERATOR.SUBSTRACT:
      return _number1 - _number2;
    case OPERATOR.MULTIPLY:
      return _number1 * _number2;
    case OPERATOR.DEVIDE:
      return _number1 / _number2;
    default:
      return _number2;
  }
};

const getResult = (number) => {
  if (number === Infinity) {
    return 'Infinity number';
  }
  if (number >= Number.MAX_SAFE_INTEGER || number <= Number.MIN_SAFE_INTEGER) {
    return 'Too large number';
  }

  return number;
};

export {
  calculate,
  getResult,
};
