import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: 'AIzaSyCSbquUyTxlpAwHnc1GSzUy9iUcJTqQRrc',
    authDomain: 'tiktok-5c948.firebaseapp.com',
    projectId: 'tiktok-5c948',
    storageBucket: 'tiktok-5c948.appspot.com',
    messagingSenderId: '120639424246',
    appId: '1:120639424246:web:401a33a7e795df5aad0ed7',
    measurementId: 'G-TTLJX34N4J',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
