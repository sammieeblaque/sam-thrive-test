import Home from "components/Home";
import SingleUser from "components/SingleUser";
import { Route, Routes } from "react-router-dom";

export const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Login is what Github calls the name of the of the user */}
      <Route path="/:login" element={<SingleUser />} />
    </Routes>
  </>
);
