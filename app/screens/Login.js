import React, { useState, useRef } from "react";
import colors from "../config/colors";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";

function Login({ navigation }) {
	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");

	const ref_input2 = useRef();

	function check_auth() {
		console.log({ Username, Password });
		// Check auth before with db
		navigation.navigate("Welcome");
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
					onSubmitEditing={() => ref_input2.current.focus()}
					autoCorrect={false}
				/>
				<Text style={{ padding: 5 }}></Text>
				<TextInput
					ref={ref_input2}
					style={styles.login}
					value={Password}
					onChangeText={(Password) => setPassword(Password)}
					placeholder="Password"
					secureTextEntry={true}
					autoCorrect={false}
					returnKeyType="go"
					enablesReturnKeyAutomatically={true}
					onSubmitEditing={() => check_auth()}
				/>
			</SafeAreaView>
		</View>
	);
}

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
		alignItems: "center",
		justifyContent: "center",
	},

	login: {
		backgroundColor: colors.secondary,
		height: 50,
		color: colors.text,
		borderRadius: 15,
		padding: 15,
		fontSize: 20,
		width: 350,
	},
});
