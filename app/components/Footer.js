import React from 'react'

const Footer = () => {
    return (
        <footer className='px-4 bg-white'>
            <div className='max-w-[1168px] mx-auto py-12 w-full'>
                <div className='flex flex-col-reverse md:flex-row justify-between items-center flex-wrap-reverse gap-8'>
                    <div class="text-xs flex flex-wrap items-start sm:items-center gap-6 font-normal">
                        <span class="text-gray-300 font-normal">2024 Saily. All rights reserved.</span>
                        <span class="flex flex-wrap gap-6 items-center">
                            <a class="transition-colors ease-out underline inline-block text-gray-300 hover:text-neutral-700" href="#" >Privacy Policy</a>
                            <a class="transition-colors ease-out underline inline-block text-gray-300 hover:text-neutral-700" href="#">Terms of Service</a>
                            <a class="transition-colors ease-out underline inline-block text-gray-300 hover:text-neutral-700" href='#'>Cookie Preference</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer