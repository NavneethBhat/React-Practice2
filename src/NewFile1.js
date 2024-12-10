import React,{useState} from 'react'



const NewFile1 = () => {


    const[count,setCount]=useState(0)

    const handleButton1=()=>
    {
        setCount(count+1)
    }

    const handleButton=()=>
        {
            setCount(count-1)
        }

    const handleButton2=()=>
            {
                setCount(0)
            }

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
            <p className='bg-purple-500 px-14 py-2 justify-center items-center rounded w-[60px] h-[40px] flex '> {count} </p> <br/>
            <button className='bg-orange-600 px-20 py-2 justify-center items-center rounded w-[60px] h-[40px] flex ' onClick={handleButton1}>Increment</button><br/>
            <button className='bg-blue-500 px-20 py-2 justify-center items-center rounded w-[60px] h-[40px] flex ' onClick={handleButton}>Decrement</button><br/>
            <button className='bg-rose-400 px-20 py-2 justify-center items-center rounded w-[60px] h-[40px] flex ' onClick={handleButton2}>Reset</button>
    </div>
  )
}

export default NewFile1