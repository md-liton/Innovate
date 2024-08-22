import React from 'react'
import './Work.css'
import work4 from '../../assets/work4.png'
import work3 from '../../assets/work3.png'
import work2 from '../../assets/work2.png'
import work1 from '../../assets/work1.png'
import { FaArrowRightLong } from "react-icons/fa6";


const Work = () => {
  return (
    <section className='py-[50px]'>
        <div className="container">
            <div className="work_main">
                <div className='text-center'>
                <span className='text-[#FF7364] text-[18px] font-normal font-paragraph'>Our Services</span>
                <h2 className='text-[46px] font-bold font-heading text-primary '>How It Works</h2>
                </div>

                <div className='flex justify-between items-center py-[50px]'>
                    <div className='item w-[330px] border border-[#DCE7FE] p-[30px] rounded-[15px] cursor-pointer hover:bg-forth  ease-in duration-300'>
                        <img src={work4} alt="" />
                        <h4 className='text-[24px] font-bold font-heading text-primary pt-[25px] '>Plan Product Roadmap</h4>
                        <p className='text-[18px] font-normal font-paragraph text-third py-[10px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                        <button className='text-forth text-[18px] font-normal font-paragraph flex items-center gap-[10px]'>Read More <FaArrowRightLong /></button>
                    </div>
                    <div className='item w-[330px] border border-[#DCE7FE] p-[30px] rounded-[15px] cursor-pointer hover:bg-forth  ease-in duration-300'>
                        <img src={work3} alt="" />
                        <h4 className='text-[24px] font-bold font-heading text-primary pt-[25px] '>Plan Product Roadmap</h4>
                        <p className='text-[18px] font-normal font-paragraph text-third py-[10px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                        <button className='text-forth text-[18px] font-normal font-paragraph flex items-center gap-[10px]'>Read More <FaArrowRightLong /></button>
                    </div>
                    <div className='item w-[330px] border border-[#DCE7FE] p-[30px] rounded-[15px] cursor-pointer hover:bg-forth  ease-in duration-300'>
                        <img src={work2} alt="" />
                        <h4 className='text-[24px] font-bold font-heading text-primary pt-[25px] '>Plan Product Roadmap</h4>
                        <p className='text-[18px] font-normal font-paragraph text-third py-[10px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                        <button className='text-forth text-[18px] font-normal font-paragraph flex items-center gap-[10px]'>Read More <FaArrowRightLong /></button>
                    </div>
                    <div className='item w-[330px] border border-[#DCE7FE] p-[30px] rounded-[15px] cursor-pointer hover:bg-forth  ease-in duration-300'>
                        <img src={work1} alt="" />
                        <h4 className='text-[24px] font-bold font-heading text-primary pt-[25px] '>Plan Product Roadmap</h4>
                        <p className='text-[18px] font-normal font-paragraph text-third py-[10px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
                        <button className='text-forth text-[18px] font-normal font-paragraph flex items-center gap-[10px]'>Read More <FaArrowRightLong /></button>
                    </div>
                </div>

                <div className='flex justify-center'>
                <button className='text-forth  py-[15px] px-[35px] rounded-[15px] border  border-forth hover:bg-forth hover:text-white ease-in duration-300'>View More</button>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Work