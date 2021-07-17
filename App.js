import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import FirstTry from "./app/screens/FirstTry";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={WelcomeScreen}
					options={{ title: "Welcome" }}
				/>
				<Stack.Screen
					name="ViewImageScreen"
					component={ViewImageScreen}
					options={{ title: "ViewImageScreen" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
