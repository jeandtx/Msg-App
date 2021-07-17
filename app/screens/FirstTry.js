import { StatusBar } from "expo-status-bar";
import React from "react";
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
} from "react-native";

function FirstTry(props) {
	const handlePress = () => alert("You touched the text !!");

	return (
		<SafeAreaView style={styles.container}>
			<Button
				color="orange"
				title="Button"
				onPress={() => alert("You pressed the button")}
			/>
			<TouchableOpacity
				onPress={() =>
					Alert.alert("Feedback is here!", "more text", [
						{ text: "OkAY", onPress: () => console.log("Yes") },
						{
							text: "Not Okay",
							onPress: () =>
								Alert.prompt(
									"Why ¿",
									"Please explain why you're not okay and with what",
									(text) => console.log(text)
								),
						},
					])
				}
			>
				<Image
					source={{
						width: 300,
						height: 300,
						uri: "http://vignette3.wikia.nocookie.net/ssbb/images/c/cd/Toon_Link_Phantom_Hourglass.png/revision/latest?cb=20120827125123&path-prefix=es",
					}}
				/>
			</TouchableOpacity>
			<View style={{ backgroundColor: "red", flex: 0.2 }}>
				<Text>This is some text in the red box</Text>
			</View>
			<Text
				numberOfLines={2}
				onPress={handlePress}
				style={{ flex: 1, paddingTop: "50%" }}
			>
				Welcome in TRENDS ! Not so many things for now but it's comming
			</Text>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

export default FirstTry;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "gold",
		alignItems: "center",
		justifyContent: "center",
	},
});
