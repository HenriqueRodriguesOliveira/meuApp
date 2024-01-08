import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Aluno } from './src/components/alunos';
import React, { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState<string | number>('');

  function handleChangeName(nome: string, idade: number | string) {
    setNome(nome);
    setIdade(idade);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Teste</Text>
      <Pressable onPress={() => handleChangeName("Ana Caroline", 19)}>
        <Text>Mudar Nome</Text>
      </Pressable>
      {nome !== '' && <Aluno nome={nome} idade={idade} />}
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
