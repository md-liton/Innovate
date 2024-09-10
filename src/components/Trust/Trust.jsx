import React from 'react'
import trust from '../../assets/trust.png'

const Trust = () => {
  return (
    <section className='py-[50px]'>
        <div className="container">
            <div className="trust_main bg-forth  rounded-[30px] overflow-hidden">
                <div className='bg-line bg-cover bg-no-repeat bg-center h-full flex '>
                    <div className="trust_left">
                        <img src={trust} alt="img" />
                    </div>
                    <div className="trust_right py-[50px]">
                    <h2 className='text-[46px] font-bold font-heading text-white ' >Trusted by 35,000+ happy customers.</h2>

                    <div className='flex justify-between'>
                    <div className='w-[180px]'>
                    <h4 className='text-[30px] font-bold font-heading text-white py-[20px]'>720+</h4>
                    <p className='text-[18px] font-normal font-paragraph text-white'>Over 500 business powered with us</p>
                    </div>
                    <div className='w-[180px]'>
                    <h4 className='text-[30px] font-bold font-heading text-white py-[20px]'>4.9+</h4>
                    <p className='text-[18px] font-normal font-paragraph text-white'>Rating on google play and app store</p>
                    </div>
                    <div className='w-[180px]'>
                    <h4 className='text-[30px] font-bold font-heading text-white py-[20px]'>200+</h4>
                    <p className='text-[18px] font-normal font-paragraph text-white'>Easily integrate with your favorite apps</p>
                    </div>
                    </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trust