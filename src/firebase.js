import firebase from "firebase/app";

import "firebase/firestore"

const firebaseConfig = {
  //CDN code of script in firebase
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()

export default firebase;