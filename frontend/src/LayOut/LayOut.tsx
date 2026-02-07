import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default LayOut;
