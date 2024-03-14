import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Custom from "./components/Custom";
import {books} from "./mocks/books";
import Card from "./components/Card";

export interface BookProps {
    title?: string;
    author?: string;
    content: string;
}

export default function App() {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={books as BookProps[]}
                keyExtractor={(item) => item.content}
                renderItem={({item}) => (
                    <Card>
                        <Card.Header title={item.title} />
                        <Card.Body content={item.content} />
                        <Card.Footer author={item.author} />
                    </Card>
                )}
            />
            <Custom content={"mostre isso em tela"} onPress={() => console.log("clicou")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: "100%",
    }
});
