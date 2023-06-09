import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();
    useEffect(()=>{
      window.scrollTo(0,0);
    },[pathname])
    const normal = "text-2xl font-semibold cursor-pointer hover:underline hover:text-[#ff6b6d] underline-offset-4 mr-8 float-right";
    const selected = "text-2xl font-semibold cursor-pointer underline text-[#ff6b6d] underline-offset-4 mr-8 float-right"
    return (
      <nav className=" flex px-[6vw] py-4 justify-between bg-[#fff5f5]">
        <Link to="/">
          <div className="flex flex-col justify-center content-center select-none cursor-pointer">
            <h1 className="text-center text-4xl font-semibold">
              Thrayee Engineering
            </h1>
            <h1 className="text-center text-4xl font-semibold">
              & Infra solutions
            </h1>
          </div>
        </Link>
        <ul className="flex float-right justify-items-end items-center">
          <li className={pathname === "/" ? selected : normal}>
            <Link to="/">Home</Link>
          </li>
          <li className={pathname.includes("/about") ? selected : normal}>
            <Link to="/about">About us</Link>
          </li>
          <li className={pathname.includes("/products") ? selected : normal}>
            <Link to="/products">Products</Link>
          </li>
          {/* <li className={pathname.includes('/contact') ? selected : normal}>Contact us</li> */}
          <li>
            <button className="text-2xl font-semibold px-4 py-2 border  bg-[#ff6b6d] rounded-full text-white hover:bg-[#ee6567] float-right">
              <Link to="/contact">Contact us</Link>
            </button>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;