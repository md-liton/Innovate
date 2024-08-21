import React from 'react'
import we from '../../assets/we.png'
import icon1 from '../../assets/icon1.png'

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
                    <div>
                    <div className='w1/2'>
                    <img src={icon1} alt="" />
                    <h4>Fast and Easy to use</h4>
                    <p>Easily to convert API with just a few clicks</p>
                    </div>
                    <div className='w1/2'></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Business