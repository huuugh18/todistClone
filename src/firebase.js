import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCWkOwOC9xrDwrf5Ht8czH9CwXyo5wvP1w",
    authDomain: "todoist-app-29bbe.firebaseapp.com",
    databaseURL: "https://todoist-app-29bbe.firebaseio.com",
    projectId: "todoist-app-29bbe",
    storageBucket: "",
    messagingSenderId: "878876449160",
    appId: "1:878876449160:web:b8a95a28f21e7782"
})

export { firebaseConfig as firebase };