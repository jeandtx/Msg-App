import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableWithoutFeedback,
	SafeAreaView,
	Image,
	TouchableOpacity,
	TouchableHighlight,
	Button,
	Alert,
	Dimensions,
	TextInput,
} from "react-native";

function FirstTry(props) {
	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");
	function enter(key) {
		if (key.nativeEvent.key == "Retour") {
			console.log("Enter pressed !");
		}
	}
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<TextInput
					style={styles.login}
					value={Username}
					onChangeText={(Username) => setUsername(Username)}
					placeholder="Username"
					returnKeyType="next"
					enablesReturnKeyAutomatically={true}
					onSubmitEditing={() =>
						console.log("Go to the next prompt ")
					}
				/>
				<Text style={{ padding: 5 }}></Text>
				<TextInput
					style={styles.login}
					value={Password}
					onChangeText={(Password) => setPassword(Password)}
					placeholder="Password"
					secureTextEntry={true}
					returnKeyType="go"
					enablesReturnKeyAutomatically={true}
					onSubmitEditing={() => console.log({ Username, Password })}
				/>
			</SafeAreaView>
		</View>
	);
}

export default FirstTry;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#0E0175",
		alignItems: "center",
		justifyContent: "center",
	},

	login: {
		backgroundColor: "#A900FF",
		height: 50,
		color: "black",
		borderRadius: 15,
		padding: 15,
		fontSize: 20,
		width: 350,
	},
});
