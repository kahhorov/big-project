import { useTranslation } from "react-i18next";
// components
import { Button } from "../../components";
// icons
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { toast as toastfy } from "react-toastify";
import loginFirebase from "../../firebase/loginFirebase";
import { contextProvider } from "../../context/Context";
//components function
function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(contextProvider);
  //  translate
  const { t } = useTranslation();
  //  hooks
  const [showPassword, setShowPassword] = useState(false);
  const [passwordText, setPasswordText] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);

  // functions
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const getData = Object.fromEntries(formData);

    try {
      const user = await loginFirebase(getData.email, getData.password);
      if (user.emailVerified) {
        dispatch({ type: "Add_User", pyload: user });
        e.target.reset();
        setPasswordText("");
        setErrorLogin(false);
        navigate("/");
        toast.success(t("Logged in successfully!"));
      } else {
        toastfy.warning(
          t("Email not verified. Please check your email address")
        );
      }
    } catch (error) {
      setErrorLogin(true);
    }
  }
  function handleChange(e) {
    setPasswordText(e.target.value);
    e.target.value.trim() === ""
      ? setPasswordError(true)
      : setPasswordError(false);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-samiDarkBlue p-8 rounded-[1.25rem] w-[400px] flex flex-col gap-4 shadow-card-shadow"
      >
        <h2 className="text-[32px] leading-[-0.5px] ">{t("Login")}</h2>
        {errorLogin && (
          <div className="w-full text-center flex justify-center mb-5">
            <p className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 inset-ring inset-ring-red-400/20">
              {t("Email or password is incorrect. Please try again")}
            </p>
          </div>
        )}
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
            className="outline-0 border-border border-b focus:border-white pb-4 w-full"
          />

          {emailError && (
            <span className="absolute right-0 text-red max-sm:text-[10px] max-sm:top-5">
              {t("Can't be empty")}
            </span>
          )}
        </label>
        <label className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder={t("Password")}
            name="password"
            required
            value={passwordText}
            onChange={handleChange}
            className="outline-0 border-border border-b pb-4 w-full"
          />
          {passwordError && (
            <span className="absolute right-0 text-red">
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
        <Button text={t("Login to your account")} />
        <div className="flex items-center gap-2">
          <p className="text-xs sm:text-sm">{t("Don't have an account?")}</p>
          <Link
            to={"/sign-up"}
            className="text-red hover:text-blue-500 transition-all duration-100 ease-out text-xs sm:text-sm"
          >
            {t("Sign up")}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
