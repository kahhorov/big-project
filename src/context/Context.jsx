import { createContext, useReducer } from "react";

export const contextProvider = createContext();

const initionalState = {
  isDark: JSON.parse(localStorage.getItem("theme")) ?? true,
  user: JSON.parse(localStorage.getItem("user")) || null,
};
function reduce(state, action) {
  switch (action.type) {
    case "Add_User":
      localStorage.setItem("user", JSON.stringify(action.pyload));
      return {
        ...state,
        user: action.pyload,
      };
    case "Change_Theme":
      localStorage.setItem("theme", JSON.stringify(!state.isDark));
      return { ...state, isDark: !state.isDark };

    default:
      return state;
  }
}

function Context({ children }) {
  const [state, dispatch] = useReducer(reduce, initionalState);
  return (
    <contextProvider.Provider value={{ state, dispatch }}>
      <div className={state.isDark ? "dark" : ""}>{children}</div>
    </contextProvider.Provider>
  );
}

export default Context;
