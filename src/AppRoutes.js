import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bollywood from "./pages/Bollywood";
import Technology from "./pages/Technology";
import Hollywood from "./pages/Hollywood";
import Fitness from "./pages/Fitness";
import Food from "./pages/Food";
import ErrorPage from "./pages/ErrorPage";
import DetailDesc from "./pages/DetailDesc";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/:genre/:id" element={
          <>
            <NavBar2 />
            <DetailDesc />
          </>
        } />

        <Route path="*" element={
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bollywood" element={<Bollywood />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/hollywood" element={<Hollywood />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/food" element={<Food />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </>
        } />
      </Routes>
    </>
  );
}

export default AppRoutes;
