import { View, Text, StyleSheet } from 'react-native';

export function Aluno({ nome }: { nome: string }) {
    return (
        <View>
            <Text>Bem vindo {nome}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
