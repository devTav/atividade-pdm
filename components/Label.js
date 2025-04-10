import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Label = ({ children }) => {
  return <Text style={styles.label}>{children}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
});

export default Label;