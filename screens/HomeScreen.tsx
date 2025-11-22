import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, ScrollView, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const App = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/Map.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search bus routes"
            placeholderTextColor="#555"
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}></ScrollView>

        <View style={styles.bottomBar}>
          <Pressable style={styles.item} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.text}>Home</Text>
          </Pressable>
          <Pressable style={styles.item} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.text}>Settings</Text>
          </Pressable>
          <Pressable style={styles.item} onPress={() => console.log('Bookmarks pressed')}>
            <Text style={styles.text}>Bookmarks</Text>
          </Pressable>
          <Pressable style={styles.item} onPress={() => console.log('Tickets pressed')}>
            <Text style={styles.text}>Tickets</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, width: '100%', height: '100%' },
  scrollContent: { flexGrow: 1, paddingTop: 20, paddingBottom: 100, alignItems: 'center' },
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
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  item: { flex: 1, alignItems: 'center' },
  text: { color: '#333', fontWeight: '500' },
});

export default App;
