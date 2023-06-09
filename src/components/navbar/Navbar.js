"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Toogle from "../tooglebutton/Toogle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link className={styles.logo} href="/">
        LOGO
      </Link>
      <div className={styles.links}>
        <Toogle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
