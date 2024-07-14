import React, { useState, useEffect } from "react";
import Logo from "../common/logo/Logo";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";
import { ButtonBg, ButtonOutline } from "../buttons/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidenav } from "../../../features/unauth-features/ActionSlice";
import { NavbarProps, RootState } from "../../../types/Interface";
import { FaSearch } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";

const Navbar: React.FC<NavbarProps> = ({ walletAddress, connectWallet }) => {
  const dispatch = useDispatch();
  const { sidenav } = useSelector((state: RootState) => state.action);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const navigate = useNavigate();

  const onToggle = () => {
    dispatch(toggleSidenav(!sidenav));
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Explore",
      link: "/#explore",
    },
    {
      text: "Community",
      link: "/#features",
    },
    {
      text: "Contact",
      link: "/#faqs",
    },
  ];

  function truncateAddress(address: string, chars = 4): string {
    if (address.length <= chars * 2) {
      return address;
    }
    const start = address.substring(0, chars);
    const end = address.substring(address.length - chars, address.length);
    return `${start}…${end}`;
  }

  return (
    <>
      <header
        className={`md:px-10 px-4 z-20 fixed right-0 left-0 transition-colors duration-300 ${scrollHeight > 50 ? "bg-bc2" : "bg-transparent"
          }`}
      >
        <section className="flex items-center justify-between py-4">
          <section>
            <Logo />
          </section>
          <section className="hidden md:block">
            <ul className="flex flex-col md:flex-row md:relative items-center gap-14">
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <RouterLink
                    className="text-base font-semibold transition-all hover:text-bc text-white hover:transition duration-300"
                    to={navLink.link}
                    onClick={() => scrollToSection(navLink.link.substring(2))}
                  >
                    {navLink.text}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </section>
          <section className="hidden md:flex items-center gap-10">
            <FaSearch className="text-white text-2xl" />
            <ButtonOutline
              className={`px-6 flex gap-2 py-3 ${scrollHeight > 50 ? "bg-bc2" : "border-bc"
                }`}
              onClick={connectWallet}
            >
              <IoWallet />
              {!walletAddress ? (
                <span> Connect Wallet </span>
              ) : (
                <span> {truncateAddress(walletAddress)} </span>
              )}
            </ButtonOutline>
          </section>
          <section className="md:hidden">
            <BsList
              onClick={onToggle}
              className="text-2xl cursor-pointer font-medium text-white z-30"
            />
          </section>
        </section>

        <section
          className={`fixed top-0 right-0 h-full p-4 w-full bg-bc2 text-white z-20 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <section className="absolute top-6 right-6 z-30">
            <BsX
              onClick={onToggle}
              className="text-2xl cursor-pointer font-medium text-white"
            />
          </section>
          <ul className="flex flex-col items-center gap-14 mt-24">
            {navLinks.map((navLink, index) => (
              <li
                onClick={onToggle} key={index}>

                <RouterLink
                  className="text-base font-medium transition hover:text-bc text-white hover:transition duration-300"
                  to={navLink.link}
                  onClick={() => scrollToSection(navLink.link.substring(2))}
                >
                  {navLink.text}
                </RouterLink>
              </li>
            ))}
            <ButtonOutline
              className={`px-6 flex gap-2 py-3 ${scrollHeight > 50 ? "bg-bc2" : "border-bc"
                }`}
              onClick={connectWallet}
            >
              <IoWallet />
              {!walletAddress ? (
                <span> Connect Wallet </span>
              ) : (
                <span> {truncateAddress(walletAddress)} </span>
              )}
            </ButtonOutline>
          </ul>
        </section>
      </header>
    </>
  );
};

export default Navbar;
