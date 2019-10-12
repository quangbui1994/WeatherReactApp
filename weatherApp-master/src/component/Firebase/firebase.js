import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyCmfJF90oW3AVz03mtGtldBPOW37JUaTRU",
    authDomain: "profound-outlet-241613.firebaseapp.com",
    databaseURL: "https://profound-outlet-241613.firebaseio.com",
    projectId: "profound-outlet-241613",
    storageBucket: "profound-outlet-241613.appspot.com",
    messagingSenderId: "177428683083",
    appId: "1:177428683083:web:f30e56df9cb0ca3c"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.firestore();
        this.googleProvider = new app.auth.GoogleAuthProvider();
        this.facebookProvider = new app.auth.FacebookAuthProvider();
    }

    // AUTHENTICATION API

    doCreateUserWithEmailAndPassword = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password);
    }

    doSignInWithEmailAndPassword = (email, password) => {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    doSignInWithGoogle = () => 
        this.auth.signInWithPopup(this.googleProvider);

    doSignInWithFacebook = () => 
        this.auth.signInWithPopup(this.facebookProvider);
    // USER API
}

export default Firebase;



