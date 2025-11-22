/*
import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/Map.png')}
        style={styles.background}
        resizeMode="cover"
      >
        { Search bar at top }
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search bus routes"
            placeholderTextColor="#555"
          />
        </View>

        { Scrollable content below search bar }
        <ScrollView contentContainerStyle={styles.scrollContent}>
        </ScrollView>

        { Fixed bottom bar }
        <View style={styles.bottomBar}>
          <View style={styles.item}><Text style={styles.text}>Go Home</Text></View>
          <View style={styles.item}><Text style={styles.text}>Settings</Text></View>
          <View style={styles.item}><Text style={styles.text}>Search</Text></View>
          <View style={styles.item}><Text style={styles.text}>Bookmarks</Text></View>
          <View style={styles.item}><Text style={styles.text}>Tickets</Text></View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 100, // leave space for bottom bar
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 10,
    padding: 15,
    marginTop: 40, // adjust for status bar
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    zIndex: 10, // keep above scroll content
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  bottomBar: {
    position: 'absolute',
    left: 0,  // ensure full width
    right: 0, // ensure full width
    bottom: 0,
    height: 70,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#333',
    fontWeight: '500',
  },
});

export default App;
*/
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";

import HomeScreen from "./screens/HomeScreen";
import TicketsScreen from "./screens/TicketsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import SearchScreen from "./screens/SearchScreen";
import { RootStackParamList } from "./navigation/types";

enableScreens(true);

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
            name="Tickets"
            component={TicketsScreen}
            options={{ title: "Tickets" }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={({ route }) => ({
            title: route.params?.name
              ? `${route.params.name}'s Settings`
              : "Settings",
          })}
        />
        <Stack.Screen
          name="Bookmarks"
          component={BookmarksScreen}
          options={{ title: "Bookmarks" }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Search" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}