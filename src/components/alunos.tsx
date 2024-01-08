import { Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../routes';

interface AlunoProps {
    nome: string;
    idade: string | number;
}

export function Aluno({ nome, idade }: AlunoProps) {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate("Detail", { nome, idade })}>
            <Text style={styles.text}>Bem vindo {nome}</Text>
            <Text style={styles.text}>Idade: {idade}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
        backgroundColor: '#121212',
        borderRadius: 8,
        marginTop: 8
    },
    text: {
        color: '#FFF'
    }
});
