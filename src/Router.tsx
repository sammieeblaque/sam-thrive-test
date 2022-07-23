import Home from "components/Home";
import { Route, Routes } from "react-router-dom";

export const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/:login" element={<User />} /> */}
    </Routes>
  </>
);
