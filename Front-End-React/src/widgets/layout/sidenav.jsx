import PropTypes from "prop-types";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Avatar, Button, IconButton, Typography } from "@material-tailwind/react";
import profilePic from "../../../public/img/ProfilePicture.png";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
import newRequest from '@/utils/api-client';
import { useAuth } from '@/utils/AuthContext';

export function Sidenav({ brandImg, brandName, routes }) {


  const navigate = useNavigate();

  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };

  const { currentUser, logout } = useAuth();
  const userName = "Ahmed";
  const userRole = "Q/A Analyst";

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      // localStorage.setItem("currentUser", null);
      
      logout();
      
    } catch (error) {
      console.log(error);
    }
    
    navigate("auth/sign-in")
    window.location.reload();
  }

  return (
    <aside className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"} fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}>
      <div className="flex h-full flex-col justify-between">
        {/* This div contains the avatar and the navigation links */}
        <div>
          <div className={`relative border-b ${sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"}`}>
            <Link to="/" className="flex items-center gap-4 py-6 px-8">
              <div className="flex items-center gap-4">
                <Avatar src={currentUser?.img || profilePic} alt="avatar" size="lg" variant="circular" />
                <div>
                  <Typography variant="h6" color="white">
                    {currentUser?.username || userName}
                  </Typography>
                  <Typography variant="small" color="white" className="font-normal">
                    {currentUser?.role || userRole}
                  </Typography>
                </div>
              </div>
            </Link>
            <IconButton variant="text" color="white" size="sm" ripple={false} className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden" onClick={() => setOpenSidenav(dispatch, false)}>
              <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
            </IconButton>
          </div>
          <div className="m-4">
            {routes.map(({ layout, title, pages }, key) => (
              <ul key={key} className="mb-4 flex flex-col gap-1">
                {title && (
                  <li className="mx-3.5 mt-4 mb-2">
                    <Typography variant="small" color={sidenavType === "dark" ? "white" : "blue-gray"} className="font-black uppercase opacity-75">
                      {title}
                    </Typography>
                  </li>
                )}
                {pages.map(({ icon, name, path }) => {
                  // Conditionally filter out "Sign in" and "Sign up" buttons based on currentUser
                  if (name === "Sign in" && currentUser) {
                    return null; // Filter out "Sign in" when currentUser is not null
                  }
                  if (name === "sign up" && currentUser) {
                    return null; // Filter out "Sign up" when currentUser is not null
                  }
                  if (name === "Dashboard Home" && !currentUser) {
                    return null; // Filter out "Sign up" when currentUser is not null
                  }
                  if (name === "Upload Audio" && !currentUser) {
                    return null; // Filter out "Sign up" when currentUser is not null
                  }
                  if (name === "Call History" && !currentUser) {
                    return null; // Filter out "Sign up" when currentUser is not null
                  }
                  if (name === "Help & Support" && !currentUser) {
                    return null; // Filter out "Sign up" when currentUser is not null
                  }
                  if (name === "Account" && !currentUser) {
                    return null; // Filter out "Sign up" when currentUser is not null
                  }
                  return (
                    <li key={name}>
                      {icon && (
                        <NavLink to={`/${layout}${path}`}>
                          {({ isActive }) => (
                            <Button
                              variant={isActive ? "gradient" : "text"}
                              color={isActive ? sidenavColor : (sidenavType === "dark" ? "white" : "blue-gray")}
                              className="flex items-center gap-4 px-4 capitalize"
                              fullWidth
                            >
                              {icon}
                              <Typography color="inherit" className="font-medium capitalize">
                                {name}
                              </Typography>
                            </Button>
                          )}
                        </NavLink>
                      )}
                    </li>
                  );
                })}
                {currentUser ? (
                  <Button onClick={handleLogout}>
                    Logout
                  </Button>
                ) : null}
              </ul>
            ))}
          </div>
        </div>
        {/* This div contains the footer logo */}
        {/* <div className="">
          <img src={projectLogo} alt="Project Logo" className="mx-auto w-32" />
        </div> */}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Call Analysis",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;