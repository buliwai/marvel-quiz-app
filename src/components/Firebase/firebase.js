import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration (lien issu du site firebase une fois appli reliée qu'on a renommé en const config)
const config = {
    apiKey: "AIzaSyBtKe0GAhbJL8ZL6NiBSNMTZ_IPAAoZ81s",
    authDomain: "marvel-quiz-48893.firebaseapp.com",
    projectId: "marvel-quiz-48893",
    storageBucket: "marvel-quiz-48893.appspot.com",
    messagingSenderId: "766604729118",
    appId: "1:766604729118:web:3602371ddebbac27d4070f"
};
  
class Firebase {
  constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.firestore()
  }

  // inscription
  signupUser = (email, password) => 
  this.auth.createUserWithEmailAndPassword(email, password);

  // Connexion
  loginUser = (email, password) => 
  this.auth.signInWithEmailAndPassword(email, password);

  // Déconnexion
  signoutUser = () => this.auth.signOut();

  // Récupérer le mot de passe
  passwordReset = email => this.auth.sendPasswordResetEmail(email); 

  // firestore
  user = uid => this.db.doc(`users/${uid}`);
}
    export default Firebase;