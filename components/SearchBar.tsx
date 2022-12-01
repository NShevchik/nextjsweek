import { MdSearch, MdArrowForwardIos } from 'react-icons/md'

export const SearchBar = () => {
    return (
        <div className="bg-white w-[430px] h-[50px] bg-white rounded-[30px] text-whale-fin text-xs">
            <div className="flex flex-row items-center h-full px-7">
                <div className='text-[22px] mr-[10px]'>
                    <MdSearch />
                </div>
                <input type="text" className='text-black font-normal placeholder:font-bold w-full outline-none' placeholder='Search Products, Orders and Clients' />
                <div className='cursor-pointer'>
                    <MdArrowForwardIos />
                </div>
            </div>
        </div>
    )
}