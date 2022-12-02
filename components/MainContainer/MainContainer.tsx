import Head from 'next/head'
import React from 'react'
import { Header } from '../Header/Header'
import { Profile } from '../Profile/Profile'

export const MainContainer = ({ children, keywords }: { children: any, keywords: string }) => {
    return (
        <>
            <Head>
                <title>Main Page</title>
                <meta name="keywords" content={"nikita, " + keywords} />
            </Head>
            <Header />
            <div className='flex flex-row max-w-[1600px] pt-[25px] m-auto px-[25px]ay'>
                <div className='flex-26'>
                    <Profile />
                </div>
                <div className='flex-74'>
                    {children}
                </div>
            </div>
        </>
    )
}