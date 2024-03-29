
import { navLists } from '@/constants'
import Image from 'next/image'
import React from 'react'

function Navbar() {
    return (
        <header className='w-full py-5 sm:px-10 px-5 flex z-50 justify-between items-center'>
            <nav className='flex w-full z-50 screen-max-width'>
                <Image src="/assets/images/apple.svg" alt='Apple' width={14} height={18} />
                <div className='flex flex-1 justify-center max-sm:hidden'>
                    {navLists.map((nav, i) => (
                        <div key={i} className='px-5 text-sm text-gray cursor-pointer hover:text-white transition-all'>
                            {nav}
                        </div>
                    ))}
                </div>
                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <Image src="/assets/images/search.svg" alt='Search' width={18} height={18}/>
                    <Image src="/assets/images/bag.svg" alt='Bag' width={18} height={18}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar