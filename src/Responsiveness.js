import React from 'react'
import Photo from "../src/assets/wallpaperflare.com_wallpaper.jpg"



const Responsiveness =()=> {
  return (
    
    <div className='flex flex-row md:flex-row w-full gap-4'>
        <div className='bg-red-500 w-full text-center'>H</div><br/>
        <div className='bg-cyan-300 w-full text-center'>A</div><br/>
        <div className='bg-lime-800 w-full text-center'>L</div><br/>
        <div className='bg-rose-400 w-full text-center'>O</div><br/>
        <img src={Photo} alt='COD'/>
    </div>
  );
}

export default Responsiveness