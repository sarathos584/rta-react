
import useHeaderEffects from "./hooks/useHeaderEffects";
import DashBoardPage from "./pages/DashBoard/DashBoardPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import 'bootstrap/dist/css/bootstrap.css';
import Notfound from "./components/Notfound";


function App() {

  useHeaderEffects();

  return (
    <Routes>
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/DashBoard'} element={<DashBoardPage />} />

      <Route path={'/:index?'} element={<HomePage />} />
      <Route path={"/404"} element={<Notfound/>} />

    </Routes>
  );
}

export default App;
