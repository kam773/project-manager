import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBwn0g_m7Yl0USae41SxqE15RkQxpu_a-4",
    authDomain: "project-manager-3901e.firebaseapp.com",
    databaseURL: "https://project-manager-3901e.firebaseio.com",
    projectId: "project-manager-3901e",
    storageBucket: "",
    messagingSenderId: "1003489731938"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })


export default firebase;

