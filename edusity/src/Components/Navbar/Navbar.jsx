/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import DarkMode from "../DarkMode/DarkMode";

//usamos useState y useEffect para cambiar color de la barra de nav cuando hacemos scroll
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  //Lógica para ocultar o mostrar menu mobile
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : " "}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="logo" className="logo" />{" "}
      </Link>
      <ul className={mobileMenu ? " " : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={260}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img
        className="menu-icon"
        src={menu_icon}
        alt="menuIcon"
        onClick={toggleMenu}
      />
      <DarkMode />
    </nav>
  );
};

export default Navbar;
