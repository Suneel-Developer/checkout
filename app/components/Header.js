import React from 'react'

const Header = () => {
    return (
        <header className='px-4 lg:px-16 py-4 bg-white'>
            <div className='max-w-[1168px] mx-auto flex items-center justify-between gap-2 flex-wrap'>
                <a href="/">
                    <img src="/assets/saily-logo.svg" alt="saily-logo" className='w-20 md:w-[100px]' />
                </a>
            </div>
        </header>
    )
}

export default Header