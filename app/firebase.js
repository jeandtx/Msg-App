import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
	apiKey: "AIzaSyBoszLpevxyVnzjUj8vZ_JuP4GpL72zFU4",
	authDomain: "a-try-4de22.firebaseapp.com",
	projectId: "a-try-4de22",
	storageBucket: "a-try-4de22.appspot.com",
	messagingSenderId: "689767388834",
	appId: "1:689767388834:web:d8cf7dd95871a941ce69fb",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
