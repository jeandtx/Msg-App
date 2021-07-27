import React from "react";
import { View, Text } from "react-native";
import {
	Avatar,
	Bubble,
	SystemMessage,
	Message,
	MessageText,
} from "react-native-gifted-chat";
import colors from "../config/colors";

export const renderAvatar = (props) => (
	<Avatar
		{...props}
		containerStyle={{
			left: { borderWidth: 3, borderColor: colors.primary },
			right: {},
		}}
		imageStyle={{
			left: { borderWidth: 3, borderColor: colors.primary },
			right: {},
		}}
	/>
);

export const renderBubble = (props) => (
	<Bubble
		{...props}
		containerStyle={{
			left: { borderColor: colors.primary, borderWidth: 8 },
			right: {},
		}}
		wrapperStyle={{
			left: { borderColor: colors.background_textinput_left, borderWidth: 4 },
			right: {borderColor: colors.background_textinput, borderWidth: 4 },
		}}
		bottomContainerStyle={{
			left: { borderColor: colors.background_textinput_left, borderWidth: 4 },
			right: {borderColor: colors.background_textinput, borderWidth: 4 },
		}}
		tickStyle={{}}
		usernameStyle={{ color: colors.text}}
		containerToNextStyle={{
			left: { borderColor: colors.primary, borderWidth: 4 },
			right: {},
		}}
		containerToPreviousStyle={{
			left: { borderColor: colors.primary, borderWidth: 4 },
			right: {},
		}}
	/>
);

export const renderSystemMessage = (props) => (
	<SystemMessage
		{...props}
		containerStyle={{ backgroundColor: "pink" }}
		wrapperStyle={{ borderWidth: 10, borderColor: "white" }}
		textStyle={{ color: "crimson", fontWeight: "900" }}
	/>
);

export const renderMessage = (props) => (
	<Message
		{...props}
		containerStyle={{
			left: { backgroundColor: colors.primary },
			right: { backgroundColor: colors.primary },
		}}
	/>
);

export const renderMessageText = (props) => (
	<MessageText
		{...props}
		containerStyle={{
			left: { backgroundColor: colors.background_textinput_left },
			right: { backgroundColor: colors.secondary },
		}}
		textStyle={{
			left: { color: colors.text },
			right: { color: colors.textLight },
		}}
		linkStyle={{
			left: { color: "orange" },
			right: { color: "orange" },
		}}
		customTextStyle={{ fontSize: 24, lineHeight: 24 }}
	/>
);

export const renderCustomView = () => (
	<View style={{ minHeight: 10, alignItems: "center" }}>
		<Text>Send by </Text>
	</View>
);
