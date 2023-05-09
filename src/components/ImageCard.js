import React from 'react'

const ImageCard = ({ icon, name }) => {
    return (
        <div className='h-min overflow-hidden rounded-md p-8  mx-[5rem] mb-[5rem] shadow-2xl shadow-[8px 8px 8px 8px rgba(1,1,1,1)]'>
            <img className='hover:scale-125 transition-all h-[14rem] w-[16rem] duration-500 cursor-pointer' src={icon} alt="" />
            <p className='text-2xl font-semibold mt-10 text-center'>{name}</p>
        </div>
    )
}

export default ImageCard