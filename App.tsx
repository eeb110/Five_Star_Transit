import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function GoHome() {
  return (
    <View style={styles.screen}>
      <Text>Go Home</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Settings</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={styles.screen}>
      <Text>Search</Text>
    </View>
  );
}

function BookmarksScreen() {
  return (
    <View style={styles.screen}>
      <Text>Bookmarks</Text>
    </View>
  );
}

function TicketsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Tickets</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={GoHome} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      <Tab.Screen name="Tickets" component={TicketsScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/Map.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
