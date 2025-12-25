import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAbm4rMRcE0DJpXMzQ8aG77-a6Bo0W3Q0U",
  authDomain: "project-1-75c75.firebaseapp.com",
  projectId: "project-1-75c75",
  storageBucket: "project-1-75c75.firebasestorage.app",
  messagingSenderId: "196493749266",
  appId: "1:196493749266:web:4d458b5206cac1363d3ccb",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup, signOut };
