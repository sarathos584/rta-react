
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
      <Route path={'/trfesrv/public_resources/my-ecertificates.do/fromQRCode/true/certType/206/certNo/:trfNo?'} element={<HomePage />} />
      <Route path={"*"} element={<Notfound/>} />

    </Routes>
  );
}

export default App;
