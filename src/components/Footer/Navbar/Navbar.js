import Link from "next/link";
import React from "react";

const Navbar = () => {
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
      id: 1,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 1,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <div>
      <h3>This is navbar.</h3>
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
};

export default Navbar;
