import "./App.css";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./context/AuthContext";


function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
