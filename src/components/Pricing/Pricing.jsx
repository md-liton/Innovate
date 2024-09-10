import React from 'react'
import pricing1 from '../../assets/pricing1.png'
import pricing2 from '../../assets/pricing2.png'
import pricing3 from '../../assets/pricing3.png'
import icon from '../../assets/icon.png'

const Pricing = () => {
  return (
    <section className='py-[50px]'>
        <div className="container">
            <div className="work_main">
                <div className=' text-center flex justify-center'>
                <h2 className='text-[46px] font-bold font-heading text-primary w-[650px]'>Pricing Designed To Fit Your Business</h2>
                </div>
                <div className='flex justify-center items-center gap-[15px]'>
                    <span className='font-bold text-forth'>Monthly</span>
                    <div className='bg-forth h-[30px] w-[96px] rounded-[50px] p-[3px] flex items-center'>
                        <div className='h-[25px] w-[25px] rounded-full bg-white cursor-pointer'>
                        </div>
                    </div>
                    <span className='font-bold'>Yearly</span>
                </div>

                <div className=' flex justify-between items-center '>
                <div className='flex justify-between items-center py-[50px]'>
                    <div className='item w-[330px] border border-[#DCE7FE] p-[30px] rounded-[15px] cursor-pointer hover:bg-forth  ease-in duration-300 text-center'>
                        <div className='flex justify-center  '>
                        <img src={pricing1} alt="" />
                        </div>
                        <p className='font-bold text-forth  py-[10px] font-heading pricing_icon'>Personal</p>
                        <h4 className='text-[40px] font-bold font-heading text-primary '>$10/mth</h4>
                        <p className='text-[18px] font-normal font-paragraph text-third py-[10px]'>Annual pricing <span className='text-forth'>(save 20%)</span></p>

                        <div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>Calendar View</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>Custom Templates</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>list view</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>board view</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>Assignees & Due Dates </p>
                            </div>
                            <div className='py-[30px]'>
                            <button className='text-white bg-forth py-[15px] px-[80px] rounded-[10px]  pricing_btn'>Purchase Now</button>
                            </div>
                        </div>



                        
                    </div>
                </div>
                <div className='flex justify-between items-center py-[50px]'>
                    <div className='item w-[330px] border border-[#DCE7FE] p-[30px] rounded-[15px] cursor-pointer hover:bg-forth  ease-in duration-300 text-center'>
                        <div className='flex justify-center  '>
                        <img src={pricing1} alt="" />
                        </div>
                        <p className='font-bold text-forth  py-[10px] font-heading pricing_icon'>Team</p>
                        <h4 className='text-[40px] font-bold font-heading text-primary '>$25/mth</h4>
                        <p className='text-[18px] font-normal font-paragraph text-third py-[10px]'>Annual pricing <span className='text-forth'>(save 35%)</span></p>

                        <div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>Calendar View</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>Custom Templates</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>list view</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>board view</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>Assignees & Due Dates </p>
                            </div>
                            <div className='py-[30px]'>
                            <button className='text-white bg-forth py-[15px] px-[80px] rounded-[10px]  pricing_btn'>Purchase Now</button>
                            </div>
                        </div>



                        
                    </div>
                </div>
                <div className='flex justify-between items-center py-[50px]'>
                    <div className='item w-[330px] border border-[#DCE7FE] p-[30px] rounded-[15px] cursor-pointer hover:bg-forth  ease-in duration-300 text-center'>
                        <div className='flex justify-center  '>
                        <img src={pricing1} alt="" />
                        </div>
                        <p className='font-bold text-forth  py-[10px] font-heading pricing_icon'>Enterprise</p>
                        <h4 className='text-[40px] font-bold font-heading text-primary '>$50/mth</h4>
                        <p className='text-[18px] font-normal font-paragraph text-third py-[10px]'>Annual pricing <span className='text-forth'>(save 40%)</span></p>

                        <div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>Calendar View</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>Custom Templates</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>list view</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>board view</p>
                            </div>
                            <div className='flex items-center gap-[20px] py-[10px]'>
                                <div className='h-[24px] w-[24px] rounded-full bg-[#F4EBFF] flex justify-center items-center'>
                                    <img src={icon} alt="img" />
                                </div>
                                <p className='text-[18px] font-normal font-paragraph text-third'>Assignees & Due Dates </p>
                            </div>
                            <div className='py-[30px]'>
                            <button className='text-white bg-forth py-[15px] px-[80px] rounded-[10px]  pricing_btn'>Purchase Now</button>
                            </div>
                        </div>



                        
                    </div>
                </div>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Pricing