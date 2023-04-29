import React from 'react';
import Image from '../assets/cargo.svg';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';
import img5 from '../assets/5.jpeg';
import img6 from '../assets/6.jpeg';
import faq from '../assets/faq.png';
import ImageCard from './ImageCard';
import Accordion from './Accordion';
import Footer from './Footer';


const Home = () => {
  let names = ['Chain sprockets', 'Cable reeling drum', 'Electrical cables', 'Electro magnetic clutch', 'Gear motor ', 'Hydraulic cylinder'];
  return (
    <div>
      <div className='flex px-[6vw] items-center bg-[#fff5f5]'>
        <div>
          <p className='text-5xl mb-6 leading-[3.5rem]'>A Global Supplier of Industrial Machinery and Spares.</p>
          <p className='text-lg'>Headed by highly experienced professionals, within short time the company has got good reputation in the domestic and international markets. The team is a major strength of the company.</p>
          <button className='text-2xl mt-10 font-semibold px-4 py-2 rounded-lg text-white hover:bg-[#ee6567] bg-[#ff6b6d]'>Book Appointment</button>
        </div>
        <img className='h-[80vh] w-[45vw]' src={Image} alt="" />
      </div>
      <div>
        <h1 className='text-4xl text-center mt-20 mb-2'>Latest Products</h1>
        <p className='text-lg text-center mb-20'>Click on card to get more information about the product.</p>
        <div className='flex mx-[2vw] flex-wrap justify-center items-center'>
          <ImageCard icon={img1} name={names[0]} />
          <ImageCard icon={img2} name={names[1]} />
          <ImageCard icon={img3} name={names[2]} />
          <ImageCard icon={img4} name={names[3]} />
          <ImageCard icon={img5} name={names[4]} />
          <ImageCard icon={img6} name={names[5]} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-[#fff5f5] pb-10'>
        <h1 className='text-4xl text-center mt-10 mb-10'>Frequently Asked Questions</h1>
        <div className='flex justify-center items-center'>
          <img className='h-[20vw]' src={faq} alt="" />
          <Accordion />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home