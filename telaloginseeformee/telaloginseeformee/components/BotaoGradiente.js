import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ onPress, title, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <LinearGradient
        colors={['#6044C2', '#7845AC']}
        style={styles.gradient}
        start={[0, 0]}
        end={[0, 1]}
      >
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5,
  },
  gradient: {
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width:330,
    height: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default GradientButton;