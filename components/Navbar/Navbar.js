import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Darkmode from "../Darkmode/Darkmode";
import Hamburger from 'hamburger-react'

const Navbar = () => {
  // set nav style on scroll
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
      setOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });
  // Mobile Navigation
  const [open, setOpen] = useState(false);
  
  // set active color on navLink
  const router = useRouter();

  return (
    <>
      <nav className={navbar ? styles.active : styles.Navbar}>
        <div className={styles.NavLogo}>
          <Link href="/" replace>
            <Image src="/inkara.png" width={70} height={45} alt="logo inkara" />
          </Link>
        </div>
       
        <ul className={open ? styles.MenuOpen : styles.NavMenu}>
          <Link href="/" replace>
            <a onClick={() => setTimeout(() => {setOpen(false)}, 100)} 
             className={router.pathname === "/" ? "activeTab" : ""}>Home</a>
          </Link>
          <Link href="/about" replace>
            <a onClick={() => setTimeout(() => {setOpen(false)}, 100)}
              className={router.pathname === "/about" ? "activeTab" : ""}>
              About Us
            </a>
          </Link>
          <Link href="/events" replace>
            <a onClick={() => setTimeout(() => {setOpen(false)}, 100)} 
             className={router.pathname === "/events" ? "activeTab" : ""}>
              Our Event
            </a>
          </Link>
          <Link href="/tourism" replace>
            <a onClick={() => setTimeout(() => {setOpen(false)}, 100)} 
             className={router.pathname === "/tourism" ? "activeTab" : ""}>
              Tourism
            </a>
          </Link>
          <Link href="/gallery" replace>
            <a onClick={() => setTimeout(() => {setOpen(false)}, 100)} 
             className={router.pathname === "/gallery" ? "activeTab" : ""}>
              Our Gallery
            </a>
          </Link>
          <Link href="/contact" replace>
            <a onClick={() => setTimeout(() => {setOpen(false)}, 100)} 
             className={router.pathname === "/contact" ? "activeTab" : ""}>
              Contact Us
            </a>
          </Link>
        </ul>
        <div className={styles.FlexMobile}>
          <Darkmode />
          <Hamburger duration={0.6} direction="right" size={25} toggled={open} toggle={setOpen} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
