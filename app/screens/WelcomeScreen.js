import * as React from "react";
import {
	Button,
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	View,
} from "react-native";

function WelcomeScreen({navigation}) {
	return (
		<ImageBackground
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require("../assets/logo-red.png")}
				/>
				<Text>Sell What You Don't Need</Text>
			</View>
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Button
					title="View Image Screen"
					onPress={() => navigation.navigate("Welcome")}
				/>
			</View>
			<View style={styles.loginButton}></View>
			<View style={styles.registerButton}></View>
		</ImageBackground>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	loginButton: {
		width: "100%",
		height: 70,
		backgroundColor: "#fc5c65",
	},
	registerButton: {
		width: "100%",
		height: 70,
		backgroundColor: "#4ecdc4",
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		position: "absolute",
		top: 100,
		alignItems: "center",
	},
});
