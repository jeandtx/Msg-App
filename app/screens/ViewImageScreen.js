import React from "react";
import { Button, Image, StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";

function ViewImageScreen({navigation}) {
	return (
		<View style={styles.container}>
            <Button title="Click here !"
            onPress={() => navigation.navigate("FirstTry")}
            />
			<View style={styles.closeIcon}></View>
			<View style={styles.deleteIcon}></View>
			<Image
				resizeMode="contain"
				source={require("../assets/chair.jpg")}
				style={styles.image}
			/>
		</View>

	);
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    nextPage: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
    },
	image: {
		width: "100%",
		height: "100%",
	},
	container: {
		backgroundColor: colors.black,
		flex: 1,
	},
	closeIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.primary,
		position: "absolute",
		top: 40,
		left: 30,
	},
	deleteIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.seconday,
		position: "absolute",
		top: 40,
		right: 30,
	},
});
