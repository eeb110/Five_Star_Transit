import React, { useState } from 'react';
import { View, TextInput, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';
import Layout from './components/Layout'; // Import Layout

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');

  const handleSearchSubmit = () => {
    // Navigate to Search screen and optionally pass query
    navigation.navigate('Search', { query });
  };

  return (
    <Layout navigation={navigation}>
      <ImageBackground
        source={require('./assets/Map.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search bus routes"
            placeholderTextColor="#555"
            value={query}
            onChangeText={setQuery}
            returnKeyType="search" // changes keyboard return key to "Search"
            onSubmitEditing={handleSearchSubmit} // called when user presses Enter
          />
        </View>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.scrollContent}></ScrollView>
      </ImageBackground>
    </Layout>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  searchContainer: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 10,
    padding: 15,
    marginTop: 40,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    zIndex: 10,
  },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10 },
  scrollContent: { flexGrow: 1, paddingTop: 20, paddingBottom: 100, alignItems: 'center' },
});

