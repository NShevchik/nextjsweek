import Head from 'next/head'
import React from 'react'
import { Header } from './Header'

export const MainContainer = ({ children, keywords }: { children: any, keywords: string }) => {
    return (
        <>
            <Head>
                <title>Main Page</title>
                <meta name="keywords" content={"nikita, " + keywords} />
            </Head>
            <Header />
            <div>
                LEFT VERTICAL MENU
            </div>
            <div>
                <div>
                    USER(PROFILE, CONTROLS, LINKS)
                </div>
            </div>
            <div>
                PAGE:
                {children}
            </div>
        </>
    )
}