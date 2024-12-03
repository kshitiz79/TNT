import React from 'react';
import HeroBanner from '@/components/herobanner/HeroBanner';
import ImageDescriptionBlock from '@/components/imageDescriptionBlock/ImageDescriptionBlock';
import descriptionImageUrl from '../../../public/assets/about-desc-image.png'
import missionImageUrl from '../../../public/assets/about-mission-image.png'
import DataStripe from '@/components/dataStripe/DataStripe';

export const metadata = {
    title: 'TNT Techies Guide - About Us',
    description: 'Learn about TNT Techies Guide',
}

const page = () => {
    const dataStripeInfo = [
        {name:"Courses", value:"15+"},
        {name:"Students", value:"200+"},
        {name:"Lecturers", value:"20+"},
        {name:"Years", value:"5+"}
      ]

    const descriptionImageBlockOneData = {
        imgUrl :descriptionImageUrl,
        title: "What we do?",
        subTitle: "Who we are and what we do",
        description:"TnT Techies Guide is a leading training and consulting firm dedicated to empowering individuals and organizations in the dynamic fields of technology. Specializing in comprehensive guides, hands-on training, and expert consulting services, we cater to a diverse range of tech enthusiasts, professionals, and businesses seeking to stay at the forefront of innovation. Our tailored programs cover a spectrum of technology domains, ensuring that clients receive cutting-edge insights and practical skills to navigate and excel in today's fast-paced digital landscape. With a commitment to excellence, TnT Techies Guide strives to be the go-to destination for those seeking top-notch training and strategic consulting solutions to unlock their full potential in the ever-evolving world of technology.."
    }

    const descriptionImageBlockTwoData = {
        imgUrl :missionImageUrl,
        title: "Our Mission",
        subTitle: "Explore more about our Mission",
        description: "<p>Our mission at TnT Techies Guide is to empower individuals and organizations by providing top-notch training and consulting services in the ever-evolving field of technology. We aim to equip our clients with the knowledge, skills, and insights necessary to thrive in today&#39;s dynamic digital landscape.</p><ul><li>Empowerment</li><li>Innovation</li><li>Diversity</li><li>Excellence&nbsp;</li><li>Leadership</li><li>Continuous Improvement</li><li>Impact</li></ul>",
        changeOrder:true,
        cssClass:"dark-bg text-white"
    }

    return (
        <>
            <HeroBanner customClass="common-hero flex items-end pb-5" title="About Us"/>

            <ImageDescriptionBlock 
                imgUrl={descriptionImageBlockOneData.imgUrl} 
                title={descriptionImageBlockOneData.title}
                subTitle={descriptionImageBlockOneData.subTitle} 
                description={descriptionImageBlockOneData.description}
            />
            <DataStripe dataArray={dataStripeInfo}/>

            <ImageDescriptionBlock 
                changeOrder={descriptionImageBlockTwoData.changeOrder} 
                cssClass={descriptionImageBlockTwoData.cssClass} 
                imgUrl={descriptionImageBlockTwoData.imgUrl} 
                title={descriptionImageBlockTwoData.title} 
                subTitle={descriptionImageBlockTwoData.subTitle} 
                description={descriptionImageBlockTwoData.description}
            />
        </>
    );
};

export default page;