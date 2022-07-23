import Home from "components/Home";
import User from "components/User";
import { Route, Routes } from "react-router-dom";

export const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
    </Routes>
  </>
);
