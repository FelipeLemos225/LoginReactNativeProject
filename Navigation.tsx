import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./Screens/WelcomeScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import HomeScreen from "./Screens/HomeScreen";
import { Colors } from "./Constants/Colors";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: Colors.background },
          headerTitleAlign: "center",
          headerTitleStyle: { color: Colors.primary },
          headerTintColor: Colors.primary,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
