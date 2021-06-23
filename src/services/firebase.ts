import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDQU5arB5009GFJytgLxNeGF_-tDkLQ0lU",
  authDomain: "letmeask-499a3.firebaseapp.com",
  databaseURL: "https://letmeask-499a3-default-rtdb.firebaseio.com",
  projectId: "letmeask-499a3",
  storageBucket: "letmeask-499a3.appspot.com",
  messagingSenderId: "415717292895",
  appId: "1:415717292895:web:d17843de39e832e42954ea"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();