
import useHeaderEffects from "./hooks/useHeaderEffects";
import DashBoardPage from "./pages/DashBoard/DashBoardPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";


function App() {

  useHeaderEffects();

  return (
    <Routes>
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/DashBoard'} element={<DashBoardPage />} />

      <Route path={'/'} element={<HomePage />} />

    </Routes>
  );
}

export default App;
