import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default async function loginFirebase(email, password) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  console.log(user);
  
  return user;
}
