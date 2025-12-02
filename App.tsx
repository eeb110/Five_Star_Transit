import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";

import HomeScreen from "./screens/HomeScreen";
import TicketScreen from "./screens/TicketsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import SearchScreen from "./screens/SearchScreen";
import SearchPaige from "./screens/SearchPaige";
import AccessibilitySafety from "./screens/AccessibilitySafetyScreen";
import Notifications from "./screens/NotificationsScreen";
import ConfirmTicket from "./screens/ConfirmTicketScreen";
import TicketConfirmed from "./screens/TicketConfirmedScreen";



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
            component={TicketScreen}
            options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="AccessibilitySafety"
          component={AccessibilitySafety}
        />
        <Stack.Screen
        name="Notifications"
        component={Notifications}
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
         <Stack.Screen
                  name="ConfirmTicket"
                  component={ConfirmTicket}
                  options={{ title: "Navigation" }}
                />
            <Stack.Screen
            name="TicketConfirmed"
            component={TicketConfirmed}
            options={{ title: "Navigation" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}