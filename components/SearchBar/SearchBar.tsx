import { useState } from 'react'
import { MdSearch, MdArrowForwardIos } from 'react-icons/md'

export const SearchBar = () => {
    const [active, setActive] = useState(false)
    return active ?
        (
            <div className="bg-white w-[380px] h-[50px] rounded-[30px] text-whale-fin text-xs shadow-soft">
                <div className="flex flex-row items-center h-full px-7">
                    <div className='text-[22px] mr-[10px]'>
                        <MdSearch />
                    </div>
                    <input type="text" onBlur={() => setActive(false)} className='text-black font-normal placeholder:font-bold w-full outline-none' placeholder='Search Products, Orders and Clients' />
                    <div className='cursor-pointer'>
                        <MdArrowForwardIos />
                    </div>
                </div>
            </div>
        )
        :
        (
            <div className=" w-[380px] h-[50px] text-whale-fin text-xs ">
                <div className="flex flex-row items-center h-full px-7">
                    <div className='text-[22px] mr-[10px]'>
                        <MdSearch />
                    </div>
                    <input type="text" onFocus={() => setActive(true)} className='text-black font-normal placeholder:font-bold w-full outline-none bg-transparent' placeholder='Search...' />
                </div>
            </div>
        )
}