import Home from "components/Home";
import SingleUser from "components/SingleUser";
import { Route, Routes } from "react-router-dom";

export const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:login" element={<SingleUser />} />
    </Routes>
  </>
);
