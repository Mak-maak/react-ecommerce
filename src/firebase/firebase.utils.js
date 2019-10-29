import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBL3Vk0AskM1NjTPymki9Kp6HfvPcHoF10",
    authDomain: "react-ecommerce-764f2.firebaseapp.com",
    databaseURL: "https://react-ecommerce-764f2.firebaseio.com",
    projectId: "react-ecommerce-764f2",
    storageBucket: "react-ecommerce-764f2.appspot.com",
    messagingSenderId: "505765873571",
    appId: "1:505765873571:web:1abd362c1e0f5ff8d1bc16",
    measurementId: "G-RB0ZLLQ107"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;