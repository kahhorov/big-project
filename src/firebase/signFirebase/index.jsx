import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useTranslation } from "react-i18next";

export default async function signupFirebase(name, email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  await sendEmailVerification(user);
  console.log(user);

  await updateProfile(user, {
    displayName: name,
  });

  return user;
}
