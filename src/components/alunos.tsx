import { View, Text, StyleSheet } from 'react-native';

interface AlunoProps {
    nome: string;
    idade: string | number;
}

export function Aluno({ nome, idade }: AlunoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo {nome}</Text>
            <Text style={styles.text}>Idade: {idade}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        backgroundColor: '#121212',
        borderRadius: 8,
    },
    text: {
        color: '#FFF'
    }
});
