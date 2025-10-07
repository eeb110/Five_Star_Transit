import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, ScrollView } from 'react-native';


const App = () => {
    return (
        <ImageBackground source={require('./assets/Map.png')}
        style={styles.background} resizeMode="cover" >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.input} placeholder="Search bus routes" placeholderTextColor="#555" />
                </View>
            </ScrollView>
        </ImageBackground> ); };

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        },
    scrollContent: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 100,
        },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#222',
        marginBottom: 20,
        },
    searchContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3, },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
        },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        },
    });

export default App;
