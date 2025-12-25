// mui Ui
import Switch from "@mui/material/Switch";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
// icons
import { CiDark } from "react-icons/ci";
import { PiTranslateLight } from "react-icons/pi";
import { contextProvider } from "../../context/Context";
function LeftMenu({ setOpen }) {
  //  states
  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem("theme")) ?? true
  );
  // context
  const { dispatch } = useContext(contextProvider);
  // translate
  const { t, i18n } = useTranslation();
  // functions
  const handleOpen = () => setOpen(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    dispatch({ type: "Change_Theme" });
  };
  return (
    <ul className="h-full flex flex-col justify-center relative">
      <li className="text-sm cursor-pointer px-5 py-2 hover:bg-gray-700/20">
        <button
          onClick={handleOpen}
          className="flex items-center justify-between gap-2 w-full"
        >
          <span className="flex items-center gap-2">
            <PiTranslateLight className="text-xl" />
            {t("Language")}
          </span>
          <span className="text-blue-500">
            {i18n.language === "en" ? "Englsh" : "Uzbek"}
          </span>
        </button>
      </li>
      <li className="flex justify-between items-center gap-2 text-sm cursor-pointer px-5 py-2 hover:bg-gray-700/20">
        <span className="flex items-center gap-2">
          <CiDark className="text-xl" />
          {t("Night Mode")}
        </span>
        <Switch
          checked={checked}
          onChange={handleChange}
          slotProps={{ input: { "aria-label": "controlled" } }}
        />
      </li>
      {/* left bar footer */}
      <div className="absolute bottom-0 px-5 py-2 text-[13px] w-full">
        <p className="text-gray-500">Live Chat</p>
        <p className="text-gray-500 text-xs">Chat Website {t("Version")} 1.1</p>
      </div>
    </ul>
  );
}

export default LeftMenu;
