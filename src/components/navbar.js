import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "./drawer";
import Link from "next/link";
import {
  GoogleLogin,
  CredentialResponse,
  googleLogout,
} from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { IoChevronDownOutline } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [user, setUser] = useState(null);
  const navRef = useRef();
  navRef.current = navBackground;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const responseMessage = (credentialResponse) => {
    const decodedData = credentialResponse?.credential
      ? jwtDecode(credentialResponse.credential)
      : null;
    setUser(decodedData);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const logout = () => {
    googleLogout();
    setUser(null);
    handleClose();
  };

  return (
    <>
      <section
        className="flex items-center justify-between sm:px-20 px-4 sticky top-0 z-50"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "#FFCC00" : "transparent",
        }}
      >
        <div className="py-4">
          <Link href="/" className="">
            <img className="w-40" src="/logo.png" alt="" />
          </Link>
        </div>
        <nav className="md:block hidden py-4">
          <ul className="flex items-center gap-8">
            <li className="">
              <Link href="/students" className="">
                For Students
              </Link>
            </li>
            <li className="">
              <Link href="/about" className="">
                How it Works
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          {user !== null ? (
            <section className="flex items-center gap-2">
              <img className="w-8 h-8 rounded-full" src={user?.picture} />
              <div className="flex gap-2 items-center">
                <span className="text-xs">{user?.given_name}</span>
                <div>
                  <IoChevronDownOutline
                    className="cursor-pointer"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  />
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={logout}>Logout</MenuItem>
                  </Menu>
                </div>
              </div>
            </section>
          ) : (
            <>
              <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </>
          )}
        </div>
        <div className="md:hidden block py-4">
          <AiOutlineMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </section>
    </>
  );
};

export default NavbarSection;
