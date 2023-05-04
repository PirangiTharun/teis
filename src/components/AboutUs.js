import React from 'react';
import about from '../assets/about.png';

const AboutUs = () => {
  return (
    // <div className=''>
    <div className="mx-[6vw] my-8 flex items-center">
      <div>
        <h3 className="mb-4 text-2xl font-semibold">About us</h3>
        <p className="text-lg mb-10">
          We established{" "}
          <strong>Thrayee Engineering &amp; Infra Solutions</strong> to serve
          the bulk material handling industry. Based In Hyderabad, Telangana,
          India, the company is growing on a swift pace under the supervision of
          the Expertised Engineers.
        </p>
        <h3 className="mb-4 text-2xl font-semibold">Our team</h3>
        <p className="mb-10 text-lg">
          Headed by highly experienced professionals, within short time the
          company has got good reputation in the domestic and international
          markets. The team is a major strength of the company.
        </p>
        <h3 className="mb-4 text-2xl font-semibold">Why us?</h3>
        <p className="mb-4 text-lg">
          We stand ahead of our competitors in the market owing to the following
          notable reasons :
        </p>
        <ul className="text-lg list-disc ml-8">
          <li className="mb-2">Transparent trade policies</li>
          <li className="mb-2">Patron oriented policies</li>
          <li className="mb-2">Market leading prices</li>
          <li className="mb-2">Quick delivery</li>
          <li className="mb-2">Experienced team of professionals</li>
        </ul>
      </div>
      <img className="w-[33vw] h-[42vh]" src={about} alt="" />
    </div>
    // </div>
  );
}

export default AboutUs