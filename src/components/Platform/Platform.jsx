import React from 'react'
import item1 from '../../assets/item1.png'
import item2 from '../../assets/item2.png'
import item3 from '../../assets/item3.png'
import arrow1 from '../../assets/arrow1.png'
import arrow2 from '../../assets/arrow2.png'



const Platform = () => {
  return (
    <section className='py-[80px]'>
        <div className="container">
            <div className='platform-main'>
                <div className='flex justify-between'>
                <div className='w1/2'>
                <h2 className='text-[46px] font-bold font-heading text-primary w-[500px]' >How simple is it to use our platform?</h2>
                </div>
                <div className='w1/2'>
                <p className='text-[18px] font-normal font-paragraph text-third w-[530px] '>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p></div>
                </div>


                <div className='py-[80px] flex justify-between items-center'>
                    <div className="item w-[320px] text-center">
                        <div className='flex justify-center items-center'>
                        <img src={item1} alt="" />
                        </div>
                        <h4 className='text-[24px] font-bold font-heading text-primary py-[20px]'>Login or sign up to be able use our platform</h4>
                        <p className='text-[18px] font-normal font-paragraph text-third'>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
                    </div>
                    <div>
                        <img src={arrow2} alt="" />
                    </div>
                    <div className="item w-[320px] text-center">
                        <div className='flex justify-center items-center'>
                        <img src={item2} alt="" />
                        </div>
                        <h4 className='text-[24px] font-bold font-heading text-primary py-[20px]'>Connect your website with just a few click</h4>
                        <p className='text-[18px] font-normal font-paragraph text-third'>Once your website is online, you can configure it, I will show you how to put your website online</p>
                    </div>
                    <div>
                    <img src={arrow1} alt="" />
                    </div>
                    <div className="item w-[320px] text-center">
                        <div className='flex justify-center items-center'>
                        <img src={item3} alt="" />
                        </div>
                        <h4 className='text-[24px] font-bold font-heading text-primary py-[20px]'>Take some sales data that you want</h4>
                        <p className='text-[18px] font-normal font-paragraph text-third'>Sell your data directly: The most straightforward method is to sell your data directly to another</p>
                    </div>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Platform