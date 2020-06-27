import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1JIwGfVq198gwpJjccfkyqgFLkyrxhWQ",
    authDomain: "crown-db-e8cb2.firebaseapp.com",
    databaseURL: "https://crown-db-e8cb2.firebaseio.com",
    projectId: "crown-db-e8cb2",
    storageBucket: "crown-db-e8cb2.appspot.com",
    messagingSenderId: "682083868299",
    appId: "1:682083868299:web:fd5e321ed351cc5caa7e8e"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error Creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle  = () => auth.signInWithPopup(provider);



export default firebase;