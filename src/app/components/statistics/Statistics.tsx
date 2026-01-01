

const stats = [
    { label: 'Upcoming Batches', value: '3' },
    { label: 'Pre-Registrations', value: '150+' },
    { label: 'Scholarships Available', value: '25' },
    { label: 'Launch Discount', value: '20%' },
]

export default function Statistics() {
    return (
        <div className='py-[40px] px-[16px] md:px-[120px] -mt-[40px] mt-5 relative z-20'>
            <div className='bg-white rounded-[20px] shadow-xl p-[40px] grid grid-cols-2 md:grid-cols-4 gap-[24px] border border-gray-100'>
                {stats.map((stat, index) => (
                    <div key={index} className='flex flex-col items-center text-center'>
                        <h3 className='text-[32px] md:text-[40px] font-bold text-primary mb-2'>{stat.value}</h3>
                        <p className='text-gray-500 font-medium text-sm md:text-base'>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
