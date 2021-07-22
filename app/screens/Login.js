import React, { useState, useRef, useEffect } from "react";
import colors from "../config/colors";
import {
	StyleSheet,
	Text,
	SafeAreaView,
	TextInput,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import { auth } from "../firebase";

function Login({ navigation }) {
	auth.signOut();
	const [Username, setUsername] = useState("");
	const [Password, setPassword] = useState("");

	const ref_input2 = useRef();

	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(function (user) {
			if (user) {
				console.log("User is signed in !");
			} else {
				console.log("No user is signed in !");
			}
		});

		return unsuscribe;
	}, []);

	const register = () => {
		auth.createUserWithEmailAndPassword(Username, Password)
			.then((userCredential) => {
				var user = userCredential.user;
				user.updateProfile({
					displayName: Username,
				})
					.then(function () {})
					.catch(function (error) {});
			})
			.catch((error) => {
				var errorMessage = error.message;
				alert(errorMessage);
			});
	};

	const signIn = () => {
		auth.signInWithEmailAndPassword(Username, Password).catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			alert(errorMessage);
		});
	};

	function check_auth() {
		console.log({ Username, Password });
		// register();
		signIn();

		auth.onAuthStateChanged(function (user) {
			if (user) {
				navigation.replace("Welcome", { user: Username });
			} else {
				navigation.replace("Login");
			}
		});
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<SafeAreaView style={styles.container}>
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
		</TouchableWithoutFeedback>
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
		borderRadius: 18,
		padding: 15,
		fontSize: 20,
		width: 350,
	},
});
