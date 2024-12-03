"use client"
import React, { useState, useEffect } from 'react';
import { getMediumData, getTrendingCourses } from '@/data/api/Api';
import Link from 'next/link';
import Logo from '/public/assets/tntlogo.svg'
import { facebook, youtube, linkedIn } from '../common/Icons';
import TikTok from '/public/assets/tik-tok.png'
import Instagram from '/public/assets/instagram.png'
import Threads from '/public/assets/threads.png'
import { email, phone } from '../common/Icons';


const Footer = () => {
    const [trendingCourses, setTrendingCourses] = useState([])

    const retrieveTrendingCourses = async () => {
        const arr = await getTrendingCourses();
        setTrendingCourses(arr)
    }

    useEffect(() => {
        retrieveTrendingCourses()
        getMediumData()
    }, [])

    return (
        <>
        <footer className="footer-section w-full border-top border-solid bg-blue-950">
            <div className="mx-auto text-white container py-6 lg:py-8">
                <div className="grid sm:grid-cols-2 pr-3">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 sm:gap-6">
                        <div>
                            <h2 className="mb-5 text-lg uppercase text-white font-bold">Trending Courses</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {trendingCourses && trendingCourses.map((item, index) => (
                                    <Link key={index} className='block mb-3' href={`/courses/${item.id}`}>
                                        {item.training.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-5 text-lg font-bold text-white uppercase ">Company</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-3">
                                    <Link href="/courses" className="hover:underline">Courses</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href="/upcoming-trainings" className="hover:underline">Upcoming Classes</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href="/blogs" className="hover:underline">Blogs</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href="/about-us" className="hover:underline">About Us</Link>
                                </li>
                                <li className='mb-3'>
                                    <Link href="/contact-us" className="hover:underline">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-5 text-lg text-white font-bold uppercase">Follow us</h2>
                            <p className=' pb-3 flex break-all'> <span  className='mr-3'>{email}</span> tttechiesguide@gmail.com</p>
                            <p className='flex '><span className='mr-3'>{phone}</span> +(1) 513 2000 529</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </footer>
        <footer className=" w-full">
            <div className='container mx-auto text-white  py-4 lg:py-8 sm:flex sm:items-center sm:justify-between '>
                
                    <div className="text-lg bg-white sm:text-center text-gray-400">© 2017 TNT Techies Guide. All Rights Reserved.
                    </div>
                    <div className="flex mt-4 sm:mt-0 flex-wrap">
                                <a target="_blank" href="https://www.facebook.com/tttechiesguide/" className="me-5 mt-3 text-black">
                                    {facebook}
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a target="_blank" href="https://www.youtube.com/@ttcloudtechies3267" className="me-5 mt-3 text-black">
                                    {youtube}
                                    <span className="sr-only">Youtube</span>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/tnt-techies-guide-74a07229b" className=" me-5 mt-3 text-black">
                                    {linkedIn}
                                    <span className="sr-only">linkedIn page</span>
                                </a>
                                <a target="_blank" href="https://www.tiktok.com/@tttechiesguide" className=" me-5 mt-3 text-black">
                                    <img className="w-4 h-4" src={TikTok.src} alt="tiktok-icon" />
                                    <span className="sr-only">TikTok page</span>
                                </a>
                                <a target="_blank" href="https://www.threads.net/@tttechiesguide" className=" me-5 mt-3 text-black">
                                    <img className="w-4 h-4" src={Threads.src} alt="threads-icon" />
                                    <span className="sr-only">Threads page</span>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/tttechiesguide/" className=" me-5 mt-3 text-black">
                                    <img className="w-4 h-4" src={Instagram.src} alt="instagram-icon" />
                                    <span className="sr-only">Instagram page</span>
                                </a>

                            </div>
            </div>
                </footer>
        </>
    );
};

export default Footer;