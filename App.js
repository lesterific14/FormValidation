import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';


export default function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  
  const handleOperation = (operation) => {
    let errors = {};
   
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if(!firstNumber){
      errors.firstNumber = 'First number is required.';
    }else if(isNaN(num1)){
      errors.firstNumber = 'Invalid input. Do not input a letter.';
    }

    if(!secondNumber){
      errors.secondNumber = 'Second number is required.';
    }else if(isNaN(num2)){
      errors.secondNumber ='Invalid input. Do not input a letter.';
    }

    setErrors(errors);

    if(Object.keys(errors).length > 0) 
    return;
   
    let res;
    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'sub':
        res = num1 - num2;
        break;
      case 'multi':
        res = num1 * num2;
        break;
      case 'div':
        if (num2 === 0) {
          Alert.alert('Error', 'Cannot divide by zero.');
          return;
        }
        res = num1 / num2;
        break;
      default:
        return;
    }

    if (isNaN(res)) {
      setResult('');
    } else {
      setResult(res);
    }
  };
  const reset = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult(null); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Calculator App </Text>

      <View style={styles.inputWrapper}>
        <View style={styles.container2}>
          <Text style={styles.label}> First Number </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter First Number"
            value={firstNumber}
            onChangeText={setFirstNumber}
          />
           
          {errors.firstNumber ? <Text style={styles.errorTxt}>{errors.firstNumber}</Text> : null}
        </View>

        <View style={styles.container2}>
          <Text style={styles.label}> Second Number </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Second Number"
            value={secondNumber}
            onChangeText={setSecondNumber}
          />

         {errors.secondNumber ? <Text style={styles.errorTxt}>{errors.secondNumber}</Text> : null}
        </View>
      </View>

      <View style={styles.buttonCon}>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('add')}>
          <Text style={styles.txtbutton}> Add </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('sub')}>
          <Text style={styles.txtbutton}> Subtract </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('multi')}>
          <Text style={styles.txtbutton}> Multiply </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleOperation('div')}>
          <Text style={styles.txtbutton}> Divide </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>
        Result: {result !== null ? result : ''}
      </Text>

      <View style={styles.resetcon}>
        <TouchableOpacity style={styles.reset} onPress={reset}>
          <Text style={styles.txtbutton}> Reset </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center', 
    backgroundColor: '#ecf0f1',
  },
  container2: {
    flexDirection: 'column', 
    marginBottom: 20,
  },
  inputWrapper: {
    width: '80%', 
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 13,
  },
  input: {
    borderWidth: 2,
    borderRadius: 20,
    width: '100%',
    fontSize: 17,
    padding: 4,
    paddingBottom: 10,
    paddingTop: 10,
  },
  buttonCon: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'deeppink',
    marginBottom: 15,
    width: 300,
    borderRadius: 15,
    padding: 15,
    cursor: 'pointer',
  },
  txtbutton: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: 'deeppink',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 10,
  },
  errorTxt: {
    color: 'red',
    fontSize: 15,
    marginTop: 5,
  },
  resetcon: {
    alignItems: 'center',
    marginTop: 25,
  },
  reset: {
    backgroundColor: 'red',
    width: 300,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    borderRadius: 10,
  }, 
});





