import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";

function Welcome(props) {
	return (
		<View style={styles.container}>
			<Text>This will be the welcome page !</Text>
		</View>
	);
}

export default Welcome;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
