import { View, Text, StyleSheet } from 'react-native';
import { Aluno } from './src/components/alunos';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste</Text>

      <Aluno nome="Henrique" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
