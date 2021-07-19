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
	const [text, setText] = useState("");
	return (
		<View style={styles.container}>
			<SafeAreaView>
				<TextInput
					style={styles.login}
					value={text}
					onChangeText={(text) => setText(text)}
				/>
				<Button title="log" onPress={() => console.log({ text })} />
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
	},
});
