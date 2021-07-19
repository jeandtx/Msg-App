import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import FirstTry from "./app/screens/FirstTry";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/LoginScreen";
import ChatScreen from "./app/screens/ChatScreen";

export default function App() {
	const Stack = createStackNavigator();

	return (
		// <View style={styles.container}>
		// 	<Text>Hello</Text>
		// </View>
		<NavigationContainer>
			<Stack.Navigator>
				{/* <Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ title: "Login" }}
				/>
				<Stack.Screen
					name="Chat"
					component={ChatScreen}
					options={{ title: "Chat" }}
				/>
				<Stack.Screen
					name="Home"
					component={WelcomeScreen}
					options={{ title: "Welcome" }}
				/>
				<Stack.Screen
					name="ViewImageScreen"
					component={ViewImageScreen}
					options={{ title: "ViewImageScreen" }}
				/> */}
				<Stack.Screen
					name="FirstTry"
					component={FirstTry}
					options={{ title: "FirstTry", headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
