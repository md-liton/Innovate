import React from 'react'
import brand from '../../assets/brand.png'
import left from '../../assets/app-left-bg.png'

const Apps = () => {
  return (
    <section className='bg-[#F4FAFA] py-[50px]'>
        <div className="container">
            <div className="apps_main flex items-center">
                <div className="apps-left w-1/2">
                    <span className='text-[#FF7364] text-[18px] font-normal font-paragraph'>Integrations</span>
                    <h2 className='text-[46px] font-bold font-heading text-primary pr-[50px]'>Easily integrate with your favorite apps</h2>
                    <p className='text-[18px] font-normal font-paragraph text-[#645E76] py-[15px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
                    <button className='text-white bg-forth py-[15px] px-[35px] rounded-[15px] border  border-forth hover:bg-transparent hover:text-forth ease-in duration-300'>Get Started</button>
                </div>
                <div className="apps-right w-1/2 bg-apps bg-cover bg-no-repeat bg-center">
                <img src={brand} alt="img" />
                </div>
            </div>
        </div>
        <div className='pl-[150px]'>
            <img src={left} alt="img" />
        </div>
    </section>
  )
}

export default Apps