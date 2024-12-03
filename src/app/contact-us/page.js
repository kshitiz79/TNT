import React from 'react';
import HeroBanner from '@/components/herobanner/HeroBanner';
import descriptionImageUrl from '../../../public/assets/about-desc-image.png'
import ImageDescriptionBlock from '@/components/imageDescriptionBlock/ImageDescriptionBlock';
import { email, location, phone } from '@/components/common/Icons';

export const metadata = {
    title: 'TNT Techies Guide - Contact Us',
    description: 'Contact TNT Techies Guide for more info',
}

const page = () => {
    const descriptionImageBlockOneData = {
        imgUrl :descriptionImageUrl,
        title: "What we do?",
        subTitle: "Who we are and what we do",
        description:"TnT Techies Guide is a leading training and consulting firm dedicated to empowering individuals and organizations in the dynamic fields of technology. Specializing in comprehensive guides, hands-on training, and expert consulting services, we cater to a diverse range of tech enthusiasts, professionals, and businesses seeking to stay at the forefront of innovation. Our tailored programs cover a spectrum of technology domains, ensuring that clients receive cutting-edge insights and practical skills to navigate and excel in today's fast-paced digital landscape. With a commitment to excellence, TnT Techies Guide strives to be the go-to destination for those seeking top-notch training and strategic consulting solutions to unlock their full potential in the ever-evolving world of technology."
    }

    return (
        <>
            <HeroBanner customClass="common-hero flex items-end pb-5" title="Contact Us"/> 
            <ImageDescriptionBlock 
                imgUrl={descriptionImageBlockOneData.imgUrl} 
                title={descriptionImageBlockOneData.title}
                subTitle={descriptionImageBlockOneData.subTitle} 
                description={descriptionImageBlockOneData.description}
            />
            <div className='py-5 light-blue-bg'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.697115523609!2d-84.5296733!3d39.1361233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b47170bd7dfb%3A0xd8b70b14531d49bf!2s2971%20Deckebach%20Ave%20APT%2065%2C%20Cincinnati%2C%20OH%2045220%2C%20USA!5e0!3m2!1sen!2slk!4v1712725804668!5m2!1sen!2slk" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='p-5'>
                            <h3>For more details Contact Us!</h3>
                            <p className='mt-4 flex gap-3'>{phone} +(1) 513 2000 529 , +(91) 84998 93456</p>
                            <p className='mt-4 flex gap-3'>{email} info@tnttechiesguide.com</p>
                            <p className='mt-4 flex gap-3'>{location} <span>2971 Deckebach Avenue Apt 65,<br/> 45220 Cincinnati, <br/>Ohio</span></p>
                            <p className='mt-4 flex gap-3'>{location} <span>Unit No:335, #10-11,<br/> Dinesh Auric Building, <br/>Bachupally, <br/>500090</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );  
};

export default page;