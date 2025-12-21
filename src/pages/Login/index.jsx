import { useTranslation } from "react-i18next";
// components
import { Button } from "../../components";
// icons
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
//components function
function Login() {
  //  translate
  const { t } = useTranslation();
  //  hooks
  const [showPassword, setShowPassword] = useState(false);
  const [passwordText, setPasswordText] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  // functions
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const getData = Object.fromEntries(formData);
    console.log(getData);

    e.target.reset();
    setPasswordText("");
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
        className="bg-samiDarkBlue p-8 rounded-[1.25rem] w-[400px] flex flex-col gap-4"
      >
        <h2 className="text-[32px] leading-[-0.5px] mb-10">{t("Login")}</h2>
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
            className="outline-0 border-border border-b focus:border-white pb-4 w-full"
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
          <p>{t("Don't have an account?")}</p>
          <Link
            to={"/sign-up"}
            className="text-red hover:text-blue-500 transition-all duration-100 ease-out"
          >
            {t("Sign up")}
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
