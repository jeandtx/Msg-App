// // rsf
// import React from "react";
// import { Platform, SafeAreaView } from "react-native";
// import { GiftedChat } from "react-native-gifted-chat";
// // import Fire from "../Fire";

// export default class ChatScreen extends React.Component {
// 	state = {
// 		messages: []
// 	}

// 	get user() {
// 		return {
// 			_id: Fire.uid,
// 			name: this.props.navigation.state.params.name
// 		}
// 	}

// 	componentDidMount() {
// 		Fire.get(message => 
// 			this.setState(previous => ({
// 				messages: GiftedChat.append(previous.message, message)
// 			}))
// 		)
// 	}

// 	componentWillUnmount() {
// 		Fire.off()
// 	}


// 	const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} 
// 	user={this.user} />;
	
// 	return (
// 		<SafeAreaView style={{flex: 1}}>
// 			{chat}
// 		</SafeAreaView>
// 	);
// }

// export default ChatScreen;