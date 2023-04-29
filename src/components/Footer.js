import React from "react";
import facebook from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import navigation from "../assets/navigation.png";
import user from "../assets/user.png";
import phone from "../assets/wapp.png";
import mail from "../assets/mail.png";

const Footer = () => {
  return (
    <footer className="flex justify-around mx-[6vw] my-10">
      <div>
        <p className="text-3xl mb-4">Follow us:</p>
        <div className="flex">
          <img className="w-10 mr-6" src={facebook} alt="" />
          <img className="w-10 mr-6" src={instagram} alt="" />
          <img className="w-10 mr-6" src={linkedin} alt="" />
          <a
            href="https://api.whatsapp.com/send?phone=919704233306"
            target="_blank"
            rel="noreferrer"
          >
            <img className="w-10 mr-6" src={whatsapp} alt="" />
          </a>
        </div>
      </div>
      <div>
        <p className="text-3xl mb-4">General links</p>
        <ul className="">
          <li>Home</li>
          <li>Products</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <p className="text-3xl mb-4">Products</p>
        <ul className="">
          <li>Engineering products</li>
          <li>Metals & Mining ores</li>
          <li>GRC products</li>
          <li>Other products</li>
        </ul>
      </div>
      <div>
        <p className="text-3xl mb-4">Contact us</p>
        <div className="flex mb-3 items-center w-[25vw]">
          <img className="w-6 mr-2" src={user} alt="" />
          <p>Madhav rao</p>
        </div>
        <div className="flex mb-3 items-center w-[25vw]">
          <img className="w-6 mr-2" src={phone} alt="" />
          <a
            href="https://api.whatsapp.com/send?phone=919704233306"
            target="_blank"
            rel="noreferrer"
          >
            <p>+91 9704233306</p>
          </a>
        </div>
        <div className="flex mb-3 items-center w-[25vw]">
          <img className="w-6 mr-2" src={mail} alt="" />
          <a href="mailto:thrayeesales@gmail.com">
            <p>thrayeesales@gmail.com</p>
          </a>
        </div>
        <div className="flex mb-3 items-center w-[25vw]">
          <img className="w-6 mr-2" src={navigation} alt="" />
          <p>
            D.No.2-22-310/C/402, Plot No.39c, Addagutta Society, Opp. Jntu,
            Kukatpally, Hyderabad, Telangana - 500072, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
