'use client'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
    {
        question: "When will the classes start in Mananthavady?",
        answer: "We are launching our first batch next month! Pre-register now to secure your spot and get the launch offer."
    },
    {
        question: "Is this training beginner-friendly?",
        answer: "Absolutely! Our MERN stack course starts from the basics of HTML/CSS and goes up to advanced backend development. No prior coding experience is required."
    },
    {
        question: "Do you offer placement assistance?",
        answer: "Yes, we have a dedicated placement cell that helps you with resume building, mock interviews, and connecting you with hiring partners."
    },
    {
        question: "What is the Pre-Launch offer?",
        answer: "For the first 50 students, we are offering a flat 50% discount on the course fee. Contact us immediately to claim it."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className='bg-sky-50 py-[80px] px-[16px] md:px-[120px]'>
            <div className='max-w-3xl mx-auto'>
                <div className='text-center mb-[40px]'>
                    <p className='text-primary font-bold uppercase tracking-widest text-sm mb-2'>Common Questions</p>
                    <h2 className='text-[32px] font-bold text-gray-900'>Frequently Asked Questions</h2>
                </div>

                <div className="w-full flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className='bg-white px-6 rounded-lg border border-gray-100 shadow-sm overflow-hidden'>
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className='w-full text-left font-semibold text-gray-800 hover:text-primary py-6 flex justify-between items-center outline-none'
                            >
                                {faq.question}
                                <IoIosArrowDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div
                                className={`text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
