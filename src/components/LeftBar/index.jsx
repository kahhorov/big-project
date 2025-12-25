import { useContext, useState } from "react";
import { contextProvider } from "../../context/Context";
import { useTranslation } from "react-i18next";
// mui Ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import LeftMenu from "../LeftMenu";
//

function LeftBar({ isOpenLeftBar }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(localStorage.getItem("language") || "en");
  // translate
  const { t, i18n } = useTranslation();
  // context
  const {
    state: { isDark },
    dispatch,
  } = useContext(contextProvider);
  // styles
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    backgroundColor: `${isDark ? "#10141e" : "#ffff"}`,
    color: `${isDark ? "#ffff" : "#111111"}`,
    boxShadow: 24,
    p: 2,
    borderRadius: "5px",
  };

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
  };
  const handleLanguage = () => {
    localStorage.setItem("language", value);
    i18n.changeLanguage(value);
    setOpen(false);
  };
  return (
    <div
      className={`bg-left-menu w-[242px] select-none h-screen absolute top-0 left-0 z-20 py-2 transition-transform duration-150 ease ${
        isOpenLeftBar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {t("Change language")}
          </Typography>
          <Typography
            id="modal-modal-description"
            component="div"
            sx={{ mt: 2 }}
          >
            <FormControl
              sx={{
                borderTop: `1px solid ${isDark ? "#eaeaeac9" : "#11111"}`,
                width: "100%",
                paddingBlock: "10px",
              }}
            >
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="en"
                  control={
                    <Radio sx={{ color: isDark ? "#fff" : "#111111" }} />
                  }
                  label="English"
                />
                <FormControlLabel
                  value="uz"
                  control={
                    <Radio sx={{ color: isDark ? "#fff" : "#111111" }} />
                  }
                  label="Uzbek"
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="outlined"
              color="primary"
              sx={{ display: "flex", justifySelf: "end" }}
              onClick={handleLanguage}
            >
              Ok
            </Button>
          </Typography>
        </Box>
      </Modal>
      {/*  */}
      <LeftMenu setOpen={setOpen} />
    </div>
  );
}
export default LeftBar;
