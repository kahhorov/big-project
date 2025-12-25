import { ToastContainer } from "react-toastify";
import Route from "./routes/Route";

function App() {
  return (
    <div className="bg-bgColor text-textColor h-screen">
      <ToastContainer />
      <Route />
    </div>
  );
}

export default App;
