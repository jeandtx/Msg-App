import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Welcome from "./app/screens/Welcome";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Login from "./app/screens/Login";
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
				*/}
				<Stack.Screen
					name="Login"
					component={Login}
					options={{ title: "Login", headerShown: false }}
				/>
				<Stack.Screen
					name="Welcome"
					component={Welcome}
					options={{ title: "Welcome" }}
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
