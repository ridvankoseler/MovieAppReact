import "./App.css";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
