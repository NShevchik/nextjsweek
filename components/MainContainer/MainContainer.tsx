import Head from 'next/head'
import React, { useState } from 'react'
import { useMenuOpen } from '../../store/store'
import { Header } from '../Header/Header'
import { Profile } from '../Profile/Profile'

export const MainContainer = ({ children, keywords }: { children: any, keywords: string }) => {
    const menu = useMenuOpen((state) => state.menu)
    return (
        <>
            <Head>
                <title>Main Page</title>
                <meta name="keywords" content={"nikita, " + keywords} />
            </Head>
            <Header />
            <div className='flex flex-row max-w-[1600px] pt-[25px] m-auto pr-[25px]'>
                <div className='flex-26 flex flex-row relative overflow-hidden'>
                    <div className={`bg-orange w-[90px] ${menu} transition-transform overflow-hidden`}>
                        <div>
                            link
                        </div>
                    </div>
                    <Profile />
                </div>
                <div className='flex-57'>
                    {children}
                </div>
            </div>
        </>
    )
}