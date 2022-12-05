import Head from 'next/head'
import React, { useState } from 'react'
import { Header } from '../Header/Header'
import { Profile } from '../Profile/Profile'
import { Sidabar } from '../Sidabar/Sidabar'

export const MainContainer = ({ children, keywords }: { children: any, keywords: string }) => {
    return (
        <>
            <Head>
                <title>Main Page</title>
                <meta name="keywords" content={"nikita, " + keywords} />
            </Head>
            <Header />
            <div className='flex flex-row max-w-[1600px] m-auto pr-[25px]'>
                <div className='flex-26 flex flex-row relative overflow-hidden'>
                    <Sidabar />
                    <Profile />
                </div>
                <div className='flex-60 pt-[25px] '>
                    {children}
                </div>
            </div>
        </>
    )
}