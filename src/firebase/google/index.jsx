// GoogleWithLogin.js
import { useState } from "react";
import { auth, provider, signInWithPopup } from "../firebase";
import { Button } from "../../components";
import { FaGoogle } from "react-icons/fa";

function GoogleWithLogin() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      // Google orqali login yoki ro'yxatdan o'tish
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;

      // Foydalanuvchi hali ro'yxatdan o'tmagan bo'lsa, Firebase avtomatik yaratadi
      // Shuning uchun alohida ro'yxatdan o'tish kodini yozishga hojat yo'q
      console.log("Logged in user:", loggedInUser);
      setUser(loggedInUser);
      alert(`Welcome, ${loggedInUser.displayName}!`);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div>
      {user ? (
        <p>Welcome, {user.displayName}</p>
      ) : (
        <Button
          onClick={handleLogin}
          text="Sign in with Google"
          icon={<FaGoogle />}
          type="button"
        />
      )}
    </div>
  );
}

export default GoogleWithLogin;
