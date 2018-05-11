import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAr6Ce5WyH-b1TwWRXy_hDb0m_fgUtaYFo",
    authDomain: "fir-practice-26af8.firebaseapp.com",
    databaseURL: "https://fir-practice-26af8.firebaseio.com",
    projectId: "fir-practice-26af8",
    storageBucket: "fir-practice-26af8.appspot.com",
    messagingSenderId: "110211998079"
};
firebase.initializeApp(config);

export default firebase;