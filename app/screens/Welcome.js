import React, { useLayoutEffect, useState, useCallback } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { auth, db } from "../firebase";
import { GiftedChat } from "react-native-gifted-chat";
import {
	renderInputToolbar,
	renderActions,
	renderComposer,
	renderSend,
} from "./InputToolbar";
import {
	renderAvatar,
	renderBubble,
	renderSystemMessage,
	renderMessage,
	renderMessageText,
	renderCustomView,
} from "./MessageContainer";
import colors from "../config/colors";

function Welcome(props) {
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

	const [text, setText] = useState("");
	const [messages, setMessages] = useState([]);
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<GiftedChat
				messages={messages}
				text={text}
				onInputTextChanged={setText}
				onSend={onSend}
				user={{
					_id: auth?.currentUser?.displayName,
					name: auth?.currentUser?.displayName,
					avatar: "./assets/avatar.png",
				}}
				alignTop
				alwaysShowSend
				scrollToBottom
				renderAvatarOnTop
				renderUsernameOnMessage
				bottomOffset={26}
				onPressAvatar={console.log}
				renderInputToolbar={renderInputToolbar}
				renderActions={renderActions}
				renderComposer={renderComposer}
				renderSend={renderSend}
				renderAvatar={renderAvatar}
				renderBubble={renderBubble}
				renderSystemMessage={renderSystemMessage}
				renderMessage={renderMessage}
				renderMessageText={renderMessageText}
				renderCustomView={renderCustomView}
				isCustomViewBottom
				messagesContainerStyle={{ backgroundColor: colors.primary }}
				parsePatterns={(linkStyle) => [
					{
						pattern: /#(\w+)/,
						style: linkStyle,
						onPress: (tag) =>
							console.log(`Pressed on hashtag: ${tag}`),
					},
				]}
			/>
		</TouchableWithoutFeedback>
	);
}

export default Welcome;
