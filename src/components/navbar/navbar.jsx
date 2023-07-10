import { Link, useLocation } from "react-router-dom";

import navbarCSS from "./navbar.module.css";
import camera from "../../assets/VideoCamera.svg";

export const Navbar = () => {
const location=useLocation().pathname.slice(1);
  return (
    <nav className={navbarCSS.nav}>
      <div className={navbarCSS.brand}>
        {" "}
        <Link to="/">
          {" "}
          <span>Lean</span>
          <span>Prep</span>
        </Link>
      </div>
      {location==="" && <div className={navbarCSS.options}>
        <Link>
          {" "}
          <span>About us</span>
        </Link>
        <Link>
          <span>Pricing</span>
        </Link>
        <Link>
          <span>
            Demo <img src={camera} alt="camera-svg" />
          </span>
        </Link>
      </div>}
    </nav>
  );
};
