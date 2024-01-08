import { View, Text, StyleSheet, Pressable, FlatList, TextInput } from 'react-native';
import { Aluno } from '../components/alunos';
import React, { useState } from 'react';

interface AlunoProps {
    nome: string;
    idade: string | number;
}

export default function Home() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [showInput, setShowInput] = useState(false)

    const [alunos, setAlunos] = useState<AlunoProps[]>([
        {
            nome: 'Henrique',
            idade: 23
        },
        {
            nome: 'Joao',
            idade: 28
        }
    ])

    function handleAdd() {
        if (!nome || !idade) {
            return;
        }

        let aluno = {
            nome: nome,
            idade: idade,
        }

        setAlunos(values => [...values, aluno])
        setNome("")
        setIdade("")
        setShowInput(false)
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.title}>Projeto React Native</Text>
                <Pressable onPress={() => setShowInput(!showInput)}>
                    <Text style={styles.title}>
                        {showInput ? "x" : "+"}
                    </Text>
                </Pressable>
            </View>

            {showInput && (
                <View style={styles.areaInput}>
                    <TextInput
                        style={styles.input}
                        placeholder='Digite seu nome...'
                        value={nome}
                        onChangeText={(text) => setNome(text)} />

                    <TextInput
                        style={styles.input}
                        placeholder='Digite sua idade...'
                        value={idade}
                        onChangeText={(text) => setIdade(text)} />

                    <Pressable style={styles.button} onPress={handleAdd}>
                        <Text style={{ color: '#FFF', textAlign: 'center' }}>Cadastrar</Text>
                    </Pressable>
                </View>
            )}
            <FlatList
                style={{ flex: 1, paddingLeft: 14, paddingRight: 14 }}
                data={alunos}
                renderItem={({ item }) => <Aluno nome={item.nome} idade={item.idade} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 36,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 28,
        paddingLeft: 14,
    },
    areaInput: {
        paddingLeft: 14,
        paddingRight: 14,
        marginBottom: 14,
        gap: 8
    },
    input: {
        backgroundColor: "#DDD",
        color: "#000",
        padding: 8,
        borderRadius: 8
    },
    button: {
        backgroundColor: '#0f291e',
        padding: 8,
        borderRadius: 8
    }
});
