import React from 'react'

export default function Sidebar() {
    return (
        <aside>
            <div>
                <ul className='my-2'>
                    <li className=' text-lg text-gray-800 py-2 my-2 px-2  hover:bg-fuchsia-900 hover:text-white cursor-pointer'>
                        Home
                    </li>
                    <li className=' text-lg text-gray-800 py-2 px-2 my-2  hover:bg-fuchsia-900 hover:text-white cursor-pointer'>
                        Add Tudo
                    </li>

                </ul>
            </div>
        </aside>
    )
}
