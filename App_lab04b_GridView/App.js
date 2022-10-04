import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import ComponentGirdView from './src/components/ComponentGirdView';
import ComponentItem from './src/components/ComponentItem';

export default function App() {
    return (
        <ComponentGirdView />

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
