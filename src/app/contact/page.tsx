'use client'


import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import RegistrationForm from '@/components/forms/RegistrationForm'

export default function Contact() {
    return (
        <div className='bg-white min-h-screen py-[60px] px-[16px] md:px-[120px]'>
            <div className='grid md:grid-cols-2 gap-[60px]'>

                {/* Contact Info */}
                <div className='flex flex-col gap-[32px]'>
                    <h1 className='text-[32px] md:text-[48px] font-bold text-primary'>Pre-Book Your Seat</h1>
                    <p className='text-gray-600'>
                        We are launching soon in Mananthavady! Pre-register now to unlock the 50% Launch Offer. Limited seats available for the first batch.
                    </p>

                    <div className='flex flex-col gap-[24px] mt-4'>
                        <div className='flex items-center gap-[16px]'>
                            <div className='bg-primary/10 p-3 rounded-full'>
                                <MdLocationOn className='text-primary text-[24px]' />
                            </div>
                            <div>
                                <h3 className='font-bold text-gray-800'>Visit Us</h3>
                                <p className='text-gray-600'>Soft Brillante, City Centre, Mananthavady, Wayanad, Kerala 670645</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-[16px]'>
                            <div className='bg-primary/10 p-3 rounded-full'>
                                <MdPhone className='text-primary text-[24px]' />
                            </div>
                            <div>
                                <h3 className='font-bold text-gray-800'>Call Us</h3>
                                <p className='text-gray-600'>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-[16px]'>
                            <div className='bg-primary/10 p-3 rounded-full'>
                                <MdEmail className='text-primary text-[24px]' />
                            </div>
                            <div>
                                <h3 className='font-bold text-gray-800'>Email Us</h3>
                                <p className='text-gray-600'>admissions@softbrillante.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form Container */}
                <div className='bg-primary/5 p-[32px] rounded-[24px] shadow-sm border border-primary/10'>
                    <h3 className='text-[24px] font-bold text-gray-800 mb-[24px]'>Pre-Registration Form</h3>
                    <RegistrationForm />
                </div>

            </div>
        </div>
    )
}
