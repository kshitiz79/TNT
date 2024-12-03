import React from 'react';
import "./HeroBanner.scss"
import Image from 'next/image'
import heroImage from '../../../public/assets/common-page-banner-new.png'
import homepageStudentImage from '../../../public/assets/student-image.png'

const HeroBanner = ({customClass, title, buttonText, buttonLink, isHomePage, heroUrl}) => {
    console.log("Hero image", heroImage)
    return (
        <div className={`hero-bg-image ${customClass}`} >
        {/*<div className={`hero-bg-image ${customClass}`} style = {{backgroundImage: `url(${heroUrl ?? heroImage.src})`}}> */}
            {/* <div className={`container mx-auto ${isHomePage ? 'text-center':''}`}> */}
            <div className={`container ${isHomePage ? '': 'mx-auto'}`}>
                {title && <h1 className='w-full lg:w-[30%] mt-6'>{title}</h1>}
                {buttonLink && <a href={buttonLink}>{buttonText}</a>}
                {isHomePage?
                <>
                    <div className='w-full md:w-[30%] px-1 py-5 font-[600] text-black'>Our purpose on this planet is to assist you in extracting maximum value from your career journey.</div>
                    <div className='banner-info-card flex flex-col md:flex-row'>
                        <div className='banner-info-card__item'>
                           For Students
                        </div>
                        <div className='banner-info-card__item'>
                        For IT & non-IT Employees
                        </div>
                    </div>
                    <div className='lg:flex justify-between w-full lg:relative top-6 '>
                        <div className='lg:w-[28%] w-full bg-white px-4 py-5 shadow-lg mb-4 lg:mb-0 '>
                            <img src='assets/carbon_tool.png' alt='Logo' className='mb-2'/>
                            <h3>Environmental Consulting</h3>
                            <h4 className='text-gray-600'>We focus on ergonomics and 
                            meeting you where you work. </h4>
                        </div>
                        <div className='lg:w-[28%] w-full bg-white px-4 py-5 shadow-lg mb-4 lg:mb-0'>
                            <img src='assets/shop_twotone.png' alt='Logo' className='mb-2'/>
                            <h3>Environmental Consulting</h3>
                            <h4>We focus on ergonomics and 
                            meeting you where you work. </h4>
                        </div>
                        <div className='lg:w-[28%] w-full px-4 py-5 bg-teal-700 text-white shadow-lg mb-4 lg:mb-0'>
                            <img src='assets/carbon_notebook.png' alt='Logo' className='mb-2'/>
                            <h3 className='text-white'>Environmental Consulting</h3>
                            <h4>We focus on ergonomics and 
                            meeting you where you work. </h4>
                        </div>
                    </div>
                
                </> 
                :<></>}
            </div>
        </div>
    );
};

export default HeroBanner;