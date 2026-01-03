import { useTranslation } from "react-i18next";
// components
import { Button } from "../../components";
// icons
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { toast as toasfy } from "react-toastify";
import signupFirebase from "../../firebase/signFirebase";
import { contextProvider } from "../../context/Context";
import { auth } from "../../firebase/firebase";
import GoogleWithLogin from "../../firebase/google";
//components function
function SignUp() {
  const navigate = useNavigate();
  const { dispatch } = useContext(contextProvider);
  //  translate
  const { t } = useTranslation();
  //  hooks
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [passwordText, setPasswordText] = useState("");
  const [repeatPasswordText, setRepeatPasswordText] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [repeatPasswordError, setRepeatPasswordError] = useState(null);
  const [checkPassword, setCheckPassword] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (auth.currentUser) {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          clearInterval(interval);
          dispatch({ type: "Add_User", pyload: auth.currentUser });
          toast.success(t("Account created successfully!"));
          navigate("/");
        }
        console.log(auth.currentUser);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  // functions
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeat-password");
    if (password === repeatPassword) {
      if (password.length < 6) {
        toast.error(t("Password must be at least 6 characters long"));
        return;
      } else if (!/[0-9]/.test(password)) {
        toast.error(t("Password must contain a number"));
        return;
      } else if (!/[a-zA-Z]/.test(password)) {
        toast.error(t("Password must contain letters"));
        return;
      }

      try {
        signupFirebase(name, email, password);
        //  clear inputs
        e.target.reset();
        setPasswordText("");
        setRepeatPasswordText("");
        toasfy.warning(t("A confirmation link has been sent to your email!"));
      } catch (error) {
        toast.error(t("Account was not created"));
      }

      //
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
      return;
    }
  }
  function handleChange(e) {
    setPasswordText(e.target.value);
    e.target.value.trim() === ""
      ? setPasswordError(true)
      : setPasswordError(false);
  }
  function handleChangeRepeat(e) {
    setRepeatPasswordText(e.target.value);
    e.target.value.trim() === ""
      ? setRepeatPasswordError(true)
      : setRepeatPasswordError(false);
  }
  useEffect(() => {
    if (checkPassword) {
      toast.error(t("Password did't match"));
    }
  }, [checkPassword, t]);

  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-samiDarkBlue p-8 rounded-[1.25rem] w-[400px] flex flex-col gap-4 shadow-card-shadow"
      >
        <h2 className="text-[32px] leading-[-0.5px] mb-10">{t("Sign up")}</h2>
        <label className="relative">
          <input
            type="text"
            placeholder={t("Full Name")}
            name="name"
            required
            onChange={(e) =>
              e.target.value.trim() === ""
                ? setNameError(true)
                : setNameError(false)
            }
            className="outline-0 border-border border-b pb-4 w-full"
          />

          {nameError && (
            <span className="absolute right-0 text-red max-sm:text-[10px] max-sm:bottom-0">
              {t("Can't be empty")}
            </span>
          )}
        </label>
        <label className="relative">
          <input
            type="email"
            placeholder={t("Email address")}
            name="email"
            required
            onChange={(e) =>
              e.target.value.trim() === ""
                ? setEmailError(true)
                : setEmailError(false)
            }
            className="outline-0 border-border border-b pb-4 w-full"
          />

          {emailError && (
            <span className="absolute right-0 text-red max-sm:text-[10px] max-sm:bottom-0">
              {t("Can't be empty")}
            </span>
          )}
        </label>
        <label className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={t("Password")}
            name="password"
            required
            value={passwordText}
            onChange={handleChange}
            className="border-border border-b outline-0 pb-4 w-full"
          />
          {passwordError && (
            <span className="absolute right-0 text-red max-sm:text-[.625rem] max-sm:bottom-0">
              {t("Can't be empty")}
            </span>
          )}

          {passwordText && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-0 text-lg translate-y-2"
            >
              {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
            </button>
          )}
        </label>
        <label className="relative mb-4">
          <input
            type={showRepeatPassword ? "text" : "password"}
            placeholder={t("Repeat password")}
            name="repeat-password"
            required
            value={repeatPasswordText}
            onChange={handleChangeRepeat}
            className={`${
              checkPassword
                ? "border-red border-b focus:border-red focus:border-b"
                : "border-border border-b"
            } outline-0 pb-4 w-full`}
          />
          {repeatPasswordError && (
            <span className="absolute right-0 text-red max-sm:text-[.625rem] max-sm:bottom-0">
              {t("Can't be empty")}
            </span>
          )}

          {repeatPasswordText && (
            <button
              type="button"
              onClick={() => setShowRepeatPassword(!showRepeatPassword)}
              className="absolute right-3 top-0 text-lg translate-y-2"
            >
              {showRepeatPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
            </button>
          )}
        </label>
        <Button text={t("Create an account")} />
        <GoogleWithLogin />
        <div className="flex items-center gap-2">
          <p>{t("Already have an account?")}</p>
          <Link
            to={"/login"}
            className="text-red hover:text-blue-500 transition-all duration-100 ease-out"
          >
            {t("Login")}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
