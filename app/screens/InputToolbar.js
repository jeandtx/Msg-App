import colors from "../config/colors";
import React from "react";
import { Image } from "react-native";
import { auth } from "../firebase";
import {
	InputToolbar,
	Actions,
	Composer,
	Send,
} from "react-native-gifted-chat";
import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";

export const renderInputToolbar = (props) => (
	<InputToolbar
		{...props}
		containerStyle={{
			backgroundColor: colors.secondary,
			paddingTop: 6,
		}}
		primaryStyle={{ alignItems: "center" }}
	/>
);

export const renderActions = (props) => (
	<Actions
		{...props}
		containerStyle={{
			width: 44,
			height: 44,
			alignItems: "center",
			justifyContent: "center",
			marginLeft: 4,
			marginRight: 4,
			marginBottom: 0,
		}}
		icon={() => (
			<SimpleLineIcons name="logout" size={24} color={colors.icons} />
		)}
		options={{
			Logout: () => {
				auth.signOut()
					.then(() => {
						console.log("User signed Out ");
					})
					.catch((error) => {
						console.log("An error happened");
					});
			},
			Cancel: () => {
				console.log("Cancel");
			},
		}}
		optionTintColor={colors.primary}
	/>
);

export const renderComposer = (props) => (
	<Composer
		{...props}
		textInputStyle={{
			color: colors.text,
			backgroundColor: colors.background_textinput,
			borderWidth: 1,
			borderRadius: 15,
			borderColor: "red",
			paddingTop: 8.5,
			paddingHorizontal: 12,
			marginLeft: 0,
		}}
	/>
);

export const renderSend = (props) => (
	<Send
		{...props}
		disabled={!props.text}
		containerStyle={{
			width: 44,
			height: 44,
			alignItems: "center",
			justifyContent: "center",
			marginHorizontal: 4,
		}}
	>
		<FontAwesome name="send" size={24} color={colors.icons} />
	</Send>
);
