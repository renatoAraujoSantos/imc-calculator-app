import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Imc = ({value, avaliationColor, avaliation}) => {
  return (
    <View style={[styles.imcBorder, {borderColor: avaliationColor}]}>
      <Text style={[styles.imcValue, {color: avaliationColor}]}>{value}</Text>
      <Text style={[styles.imcAvaliation, {color: avaliationColor}]}>
        {avaliation}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imcBorder: {
    width: 200,
    height: 200,
    borderRadius: 150,
    borderWidth: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imcValue: {
    fontSize: 50,
    fontWeight: '300',
  },
  imcAvaliation: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    width: 200,
  },
});

export default Imc;
