import colors from "../config/colors";
import React from "react";
import { Image } from "react-native";
import {
	InputToolbar,
	Actions,
	Composer,
	Send,
} from "react-native-gifted-chat";

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
			<Image
				style={{ width: 32, height: 32 }}
				source={{
					uri: "https://st2.depositphotos.com/3759967/5593/i/600/depositphotos_55936567-stock-photo-swirling-frosty-multi-colored-fractal.jpg",
				}}
			/>
		)}
		options={{
			"Choose From Library": () => {
				console.log("Choose From Library");
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
		<Image
			style={{ width: 32, height: 32 }}
			source={{
				uri: "data:image/png;base64,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",
			}}
		/>
	</Send>
);
