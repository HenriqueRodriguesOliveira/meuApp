import { View, Text, StyleSheet } from 'react-native';

import { useRoute, RouteProp } from '@react-navigation/native';

type RouteDetailParams = {
    Detail: {
        nome: string;
        idade: string | number;
    }
}

type DetailRouteProps = RouteProp<RouteDetailParams, "Detail">
export function Detail() {
    const route = useRoute<DetailRouteProps>()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página detalhes</Text>
            <Text>Nome: {route.params.nome}</Text>
            <Text>Nome: {route.params.idade}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#000',
        marginBottom: 14
    }
});
