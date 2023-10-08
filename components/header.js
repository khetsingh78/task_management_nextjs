import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className=''>
            <div className=" bg-[#fff] py-4 shadow-md px-12">
                <Link href={'/'}>
                    <h1 className=" text-2xl px-4">
                        Navbar
                    </h1>
                </Link>
            </div>
        </header>
    )
}
