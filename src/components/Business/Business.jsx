import React from 'react'
import we from '../../assets/we.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const Business = () => {
  return (
    <section>
        <div className="container">
            <div className="business_main flex justify-center  gap-[50px]">
                <div className='w-1/2'>
                <img src={we} alt="" />
                </div>
                <div className='w-1/2'>
                <h1 className='text-[46px] font-bold font-heading text-primary pr-[50px]'>We provide features for your Business</h1>
                <div>
                    <div className='flex justify-between py-[20px]'>
                    <div className='w1/2 w-[240px] '>
                    <img src={icon1} alt="" />
                    <h4 className='text-[24px] font-bold font-heading text-primary py-[20px]'>Fast and Easy to use</h4>
                    <p className='text-[18px] font-normal font-paragraph text-third'>Easily to convert API with just a few clicks</p>
                    </div>
                    <div className='w1/2 w-[240px] '>
                    <img src={icon1} alt="" />
                    <h4 className='text-[24px] font-bold font-heading text-primary py-[20px]'>Fast and Easy to use</h4>
                    <p className='text-[18px] font-normal font-paragraph text-third'>Easily to convert API with just a few clicks</p>
                    </div>
                    </div>
                    <div className='flex justify-between items-end'>
                    <div className='w1/2 w-[240px] '>
                    <img src={icon2} alt="" />
                    <h4 className='text-[24px] font-bold font-heading text-primary py-[20px]'>Get Organized</h4>
                    <p className='text-[18px] font-normal font-paragraph text-third'>From lists to boards, organize work your way. </p>
                    </div>
                    <div className='w1/2 w-[240px] '>
                    <button className='text-white bg-forth py-[15px] px-[35px] rounded-[15px] border  border-forth hover:bg-transparent hover:text-forth ease-in duration-300'>Get Started</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Business