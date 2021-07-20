import React, { useState } from "react";
import {
	StyleSheet,
	View,
	TouchableWithoutFeedback,
	TextInput,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native";
import colors from "../config/colors";

function Welcome(props) {
	const [Message, setMessage] = useState("");
	var hour = new Date().getHours();
	var minute = new Date().getMinutes();

	function publish() {
		console.log(
			props.route.params.user,
			"has pubished: '",
			Message,
			"', at ",
			hour,
			":",
			minute
		);
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View>
					<TextInput
						style={styles.publish}
						value={Message}
						onChangeText={(Message) => setMessage(Message)}
						placeholder="Publish something !(in the terminal)"
						returnKeyType="go"
						enablesReturnKeyAutomatically={true}
						onSubmitEditing={() => publish()}
						numberOfLines={30}
					/>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}

export default Welcome;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
	},
	publish: {
		backgroundColor: colors.secondary,
		height: 60,
		color: colors.text,
		paddingTop: 15,
		paddingLeft: 15,
		paddingBottom: 20,
		borderRadius: 5,
		width: 428,
		fontSize: 20,
	},
});
