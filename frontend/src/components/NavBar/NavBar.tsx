import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/Routes";
import logo from "../../assets/images/image.png";
import "./NavBar.scss";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="container">
        <div className="navContent">
          <div className="navContent_left">
            <div className="navContent_brand">
              <img
                src={logo}
                alt="logoIcon"
                onClick={() => navigate(ROUTES.HOME, { replace: true })}
              />
              <div
                className="navContent_title"
                onClick={() => navigate(ROUTES.HOME, { replace: true })}
              >
                <p className="navContent_title_p1">Smart</p>
                <p className="navContent_title_p2">Shop</p>
              </div>
            </div>
          </div>
          <div className="navContent_pages">
            <NavLink to={ROUTES.HOME}>Products</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
