import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountScreen from "./screens/AccountScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import TrackCreateScreen from "./screens/TrackCreateScreen";
import TrackListScreen from "./screens/TrackListScreen";
import TrackDetailScreen from "./screens/TrackDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TrackListDetails() {
  return (
    <Stack.Group>
      <Stack.Screen name="TrackListings" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Group>
  );
}

function TrackListFlows() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Account" component={AccountScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Signin" component={SigninScreen} />
        </Stack.Group>
        <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TrackListFlows" component={TrackListFlows} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
