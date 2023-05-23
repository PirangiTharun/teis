import React from 'react';
import { useState } from 'react';
import contact from '../assets/contact2.jpg';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import locIcon from '../assets/navigation.png';
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mail.png";
import userIcon from "../assets/user.png";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactUs = () => {
    const [contactDetails, setContactDetails] = useState({ from_name: '', user_email: '', subject: '', message: '' });
    const [openToaster, setOpenToaster] = useState(false);
    const handleChange = (e) => {
        let newDetails = { ...contactDetails, [e.target.name]: e.target.value };
        setContactDetails(newDetails);
    }
    const sendData = () => {
        if(contactDetails.from_name.length===0 || contactDetails.user_email.length===0 || contactDetails.message.length===0){
            return;
        }
        emailjs.send('service_bvrn3s5', 'template_kotbh32', contactDetails, 'axTJI7mqC4-MvkTkR')
            .then((result) => {
                setOpenToaster(true);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setContactDetails({ from_name: '', user_email: '', subject: '', message: '' });
    }
    const closeSnackbar = () => {
        setOpenToaster(false);
    }
    return (
      <>
        <div className="flex justify-between px-[6vw] mt-10">
          <div className="w-[20vw] flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#ff6b6d] flex justify-center items-center">
              <img className="w-6 h-6" src={userIcon} alt="" />
            </div>
            <p className="text-center">
              Mr. Madhava Rao
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#ff6b6d] flex justify-center items-center">
              <img className="w-6 h-6" src={phoneIcon} alt="" />
            </div>
            <p>+91 9704233306</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#ff6b6d] flex justify-center items-center">
              <img className="w-6 h-6" src={mailIcon} alt="" />
            </div>
            <p>thrayeesales@gmail.com</p>
          </div>
          <div className="w-[20vw] flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#ff6b6d] flex justify-center items-center">
              <img className="w-6 h-6" src={locIcon} alt="" />
            </div>
            <p className="text-center">
              D.No.2-22-310/C/402, Plot No.39c, Addagutta Society, Opp. Jntu,
              Kukatpally, Hyderabad, Telangana - 500072, India
            </p>
          </div>
        </div>
        <main className="flex justify-center items-center flex-wrap">
          <img className="mr-20" src={contact} alt="" />
          <div className="bg-[#ff6b6d10] px-10 py-10 rounded-lg">
            <h2 className="text-5xl mb-10 text-[#990011] text-center">
              Contact us
            </h2>
            <div className="flex flex-col">
              <input
                required
                className="border w-[30vw] text-xl focus-visible:outline-none  px-3 py-2 mb-4 rounded-md"
                placeholder="Your name"
                name="from_name"
                type="text"
                value={contactDetails.from_name}
                onChange={(e) => handleChange(e)}
              />
              <input
                required
                className="border w-[30vw] text-xl focus-visible:outline-none  px-3 py-2 mb-4 rounded-md"
                placeholder="Your email"
                type="email"
                name="user_email"
                value={contactDetails.user_email}
                onChange={(e) => handleChange(e)}
              />
              <input
                className="border w-[30vw] text-xl focus-visible:outline-none  px-3 py-2 mb-4 rounded-md"
                placeholder="Subject"
                type="text"
                name="subject"
                value={contactDetails.subject}
                onChange={(e) => handleChange(e)}
              />
              <textarea
                required
                className="border w-[30vw] text-xl focus-visible:outline-none h-24 px-3 py-2 mb-4 rounded-md"
                placeholder="Message"
                name="message"
                value={contactDetails.message}
                onChange={(e) => handleChange(e)}
              />
              <button
                onClick={() => sendData()}
                className="border border-[#990011] text-[#990011] hover:bg-[#99001110] text-xl font-semibold rounded-full p-2"
              >
                Submit
              </button>
            </div>
          </div>
        </main>
        <div className="flex flex-col justify-center items-center py-10">
          <p className="text-3xl font-semibold  mb-4">We're here</p>
          {/* eslint-disable-next-line */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2316746979045!2d78.39382856836603!3d17.496450800767086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f205db2769%3A0x18a7d6c7d7b7cc6e!2sSR%20Towers%2C%202nd%20Ln%2C%20Addagutta%20Society%2C%20Jal%20Vayu%20Vihar%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500090!5e0!3m2!1sen!2sin!4v1684568266170!5m2!1sen!2sin"
            width="80%"
            height="500"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Snackbar
          open={openToaster}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={6000}
          onClose={closeSnackbar}
        >
          <Alert
            onClose={closeSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Success!! We got your message
          </Alert>
        </Snackbar>
      </>
    );
}

export default ContactUs;