import React from 'react'
import laptop from '../../assets/laptop.png'

const Banner = () => {
  return (
    <section className='bg-banner bg-cover bg-no-repeat bg-center '>
        <div className='container'>
            <div className='pt-[195px]  '>
                <div className='w-[800px] mx-auto text-center'>
                <h1 className='text-[56px] font-bold font-heading text-white'>Get your work done with Management Tool</h1>
                <p className='text-[18px] font-normal font-paragraph text-white py-[20px] px-[180px]'>The world's first project management platform that connects everything</p>
                <div>
                <input type="text"  placeholder='Your business email' className='py-[20px] pl-[25px] pr-[155px] rounded-[15px] w-[480px] focus:outline-none'/>
                <button className='text-primary bg-secondary py-[15px] px-[25px] rounded-[15px] border  border-secondary hover:bg-transparent hover:text-secondary ease-in duration-300 ml-[-150px] text-[18px] font-paragraph font-medium'>Try for free</button>
                </div>
                </div>
                <div className='pt-[100px]'>
                    <img src={laptop} alt="img" className='' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner