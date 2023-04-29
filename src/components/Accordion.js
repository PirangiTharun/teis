import React, { useState } from 'react';
import ChevronUp from '../assets/chevronup.svg';
import ChevronDown from '../assets/chevrondown.svg';

const SingleElement = ({id,selected, setSelected, open, title, info}) => {
    const handleClick = () => {
        if(selected===id) setSelected(0);
        else setSelected(id);
    }
    return (
        <div className=' border border-[#40404070] rounded-lg mb-4 bg-white'>
            <div className='flex justify-between cursor-pointer p-4' onClick={handleClick}>
                <p className={open?' select-none font-semibold text-2xl text-[#ee6567]':'select-none text-[#404040] font-semibold text-2xl'}>{title}</p>
                <img className='select-none w-10 h-10' src={open ? ChevronUp : ChevronDown}  alt="" />
            </div>
            {open && <p className='duration-500 select-none transition-all px-4 pb-4' >{info}</p>}
        </div>
    );
}

const Accordion = () => {
    const [selected, setSelected] = useState(1);
    const titles = ["When did we establish?", "Know more about our team", "Why should you choose us?", "When did we establish?"];
    const infos = [
        "We established Thrayee Engineering & Infra Solutions to serve the bulk material handling industry. Based In Hyderabad, Telangana, India, the company is growing on a swift pace under the supervision of the Expertised Engineers.",
        "Headed by highly experienced professionals, within short time the company has got good reputation in the domestic and international markets. The team is a major strength of the company.",
        "We stand ahead of our competitors in the market owing to the following notable reasons :Transparent trade policies, Patron oriented policies, Market leading prices",
        "We established Thrayee Engineering & Infra Solutions to serve the bulk material handling industry. Based In Hyderabad, Telangana, India, the company is growing on a swift pace under the supervision of the Expertised Engineers."
    ]
    return (
        <div className='w-[50vw] items-center  border-[#40404070] rounded-lg'>
            <SingleElement id={1} selected={selected} setSelected={setSelected} open={selected===1} title={titles[0]} info={infos[0]}/>
            <SingleElement id={2} selected={selected} setSelected={setSelected} open={selected===2} title={titles[1]} info={infos[1]}/>
            <SingleElement id={3} selected={selected} setSelected={setSelected} open={selected===3} title={titles[2]} info={infos[2]}/>
            <SingleElement id={4} selected={selected} setSelected={setSelected} open={selected===4} title={titles[3]} info={infos[3]}/>
        </div>
    )
}

export default Accordion