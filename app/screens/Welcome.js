import React, { useLayoutEffect, useState, useCallback } from "react";
import {
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	View,
} from "react-native";
import colors from "../config/colors";
import { auth, db } from "../firebase";
import { GiftedChat } from "react-native-gifted-chat";

function Welcome(props) {
	const [messages, setMessages] = useState([]);

	useLayoutEffect(() => {
		const unsuscribe = db
			.collection("chats")
			.orderBy("createdAt", "desc")
			.onSnapshot((snapshot) =>
				setMessages(
					snapshot.docs.map((doc) => ({
						_id: doc.data()._id,
						createdAt: doc.data().createdAt.toDate(),
						text: doc.data().text,
						user: doc.data().user,
					}))
				)
			);
		return unsuscribe;
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) =>
			GiftedChat.append(previousMessages, messages)
		);
		const { _id, createdAt, text, user } = messages[0];
		db.collection("chats").add({
			_id,
			createdAt,
			text,
			user,
		});
	}, []);

	const signOut = () => {
		auth.signOut()
			.then(() => {
				console.log("User signed Out ");
			})
			.catch((error) => {
				console.log("An error happened");
			});
	};

	return (
		<TouchableWithoutFeedback
			onPress={Keyboard.dismiss}
			style={styles.container}
		>
			<GiftedChat
				messages={messages}
				onSend={(messages) => onSend(messages)}
				user={{
					_id: auth?.currentUser?.displayName,
					name: auth?.currentUser?.displayName,
				}}
				showUserAvatar
			/>
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
	chat: {
		width: 428,
	},
});
