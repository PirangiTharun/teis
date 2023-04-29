import React from "react";
const Navbar = () =>{
    return (
        <nav className=" flex px-[6vw] py-4 justify-between bg-[#fff5f5]">
            <div className="flex flex-col justify-center content-center">
                <h1 className="text-center text-4xl font-semibold">Thrayee Engineering</h1>
                <h1 className="text-center text-4xl font-semibold">& Infra solutions</h1>
            </div>
            <ul className="flex float-right justify-items-end items-center">
                <li className="text-2xl font-semibold cursor-pointer hover:underline hover:text-[#ff6b6d] underline-offset-4 mr-8 float-right">Home</li>
                <li className="text-2xl font-semibold cursor-pointer hover:underline hover:text-[#ff6b6d] underline-offset-4 mr-8 float-right">About</li>
                <li className="text-2xl font-semibold cursor-pointer hover:underline hover:text-[#ff6b6d] underline-offset-4 mr-8 float-right">Services</li>
                <li className="text-2xl font-semibold cursor-pointer hover:underline hover:text-[#ff6b6d] underline-offset-4 mr-8 float-right">Contact</li>
            <li><button className="text-2xl font-semibold px-4 py-2 border  bg-[#ff6b6d] rounded-lg text-white hover:bg-[#ee6567] float-right" >Call us</button></li>
            </ul>
        </nav>
    );
}

export default Navbar;