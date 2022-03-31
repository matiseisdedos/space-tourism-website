import React from 'react'
import { ReactComponent as PathLogo } from '../assets/shared/logo.svg'

const listLinks = ['home', 'destination', 'crew', 'technology']
const Header = () => {
    return (
        <header className='flex items-center justify-end max-w-[1440px]'>
            <div><PathLogo className=' mr-[64px]' /></div>
            <hr className='h-px w-[473px] border-black mr-[-20px] z-20' />
            <nav className='text-sm font-barlow bg-gray-200 uppercase w-[830px] flex items-center justify-between h-[90px] pl-[123px] pr-[165px] z-0'>
                {listLinks.map((e, i) =>
                    <a href='#'><span className='font-bold'>0{i}</span> {e}</a>
                )}
            </nav>
        </header>
    )
}

export default Header