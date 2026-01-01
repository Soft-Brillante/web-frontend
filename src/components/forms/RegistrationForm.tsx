'use client'

import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { MdCheckCircle, MdError } from 'react-icons/md'

export default function RegistrationForm({ isModal = false }: { isModal?: boolean }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errorMessage, setErrorMessage] = useState('')

    // Replace this with your Google Apps Script Web App URL
    const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzDGljiIwPfMBB0NODjLQQw6-ETfog4spq-JADg7iL3InSczb99YTtKd_-Gjegiimfh/exec'

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!GOOGLE_SHEET_URL) {
            setStatus('error')
            setErrorMessage('Google Sheet URL is not configured. Please check implementation_plan.md for setup instructions.')
            return
        }

        setStatus('loading')

        try {
            const form = new FormData()
            form.append('Name', formData.name)
            form.append('Email', formData.email)
            form.append('Phone', formData.phone)
            form.append('Message', formData.message)
            form.append('Date', new Date().toLocaleString())

            await fetch(GOOGLE_SHEET_URL, {
                method: 'POST',
                body: form,
                mode: 'no-cors'
            })

            setStatus('success')
            setFormData({ name: '', email: '', phone: '', message: '' })
        } catch (error) {
            console.error('Submission error:', error)
            setStatus('error')
            setErrorMessage('Something went wrong. Please try again.')
        }
    }

    if (status === 'success') {
        return (
            <div className='flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300'>
                <MdCheckCircle className='text-green-500 text-[64px] mb-4' />
                <h3 className='text-[24px] font-bold text-gray-800 mb-2'>Registration Successful!</h3>
                <p className='text-gray-600 mb-6'>Thank you for pre-registering. We'll contact you soon.</p>
                <Button onClick={() => setStatus('idle')} variant='outline'>Register another student</Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-[16px]'>
            <div className='flex flex-col gap-[8px]'>
                <label className='text-sm font-medium text-gray-700'>Full Name</label>
                <input
                    type='text'
                    name='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className='border border-gray-200 rounded-lg p-3 outline-none focus:border-primary transition-colors'
                    placeholder='John Doe'
                />
            </div>
            <div className='flex flex-col gap-[8px]'>
                <label className='text-sm font-medium text-gray-700'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className='border border-gray-200 rounded-lg p-3 outline-none focus:border-primary transition-colors'
                    placeholder='john@example.com'
                />
            </div>
            <div className='flex flex-col gap-[8px]'>
                <label className='text-sm font-medium text-gray-700'>Phone Number</label>
                <input
                    type='tel'
                    name='phone'
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className='border border-gray-200 rounded-lg p-3 outline-none focus:border-primary transition-colors'
                    placeholder='+91 98765 43210'
                />
            </div>
            <div className='flex flex-col gap-[8px]'>
                <label className='text-sm font-medium text-gray-700'>Message</label>
                <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className='border border-gray-200 rounded-lg p-3 outline-none focus:border-primary transition-colors min-h-[120px]'
                    placeholder='Do you have any questions about the launch?'
                />
            </div>

            {status === 'error' && (
                <div className='flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100'>
                    <MdError className='shrink-0' />
                    <span>{errorMessage}</span>
                </div>
            )}

            <Button
                type='submit'
                disabled={status === 'loading'}
                className={`mt-4 w-full text-[16px] ${isModal ? 'py-4' : 'py-6'}`}
            >
                {status === 'loading' ? 'Processing...' : 'Secure My Spot & Offer'}
            </Button>
        </form>
    )
}
