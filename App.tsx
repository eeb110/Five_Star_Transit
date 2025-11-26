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
import SearchPaige from "./screens/SearchPaige";
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
          options={{ headerShown: false, }}
        />
        <Stack.Screen
            name="Tickets"
            component={TicketsScreen}
            options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="Bookmarks"
          component={BookmarksScreen}
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false, }}
        />

        <Stack.Screen
          name="SearchPaige"
          component={SearchPaige}
          options={{ title: "Navigation" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}