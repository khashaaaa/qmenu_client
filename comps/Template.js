import React, { useState } from 'react'
import Image from 'next/image'
import Head from "next/head"
import Nav from './Nav'
import Foot from './Foot'
import { animateScroll as scroll } from 'react-scroll'

const Template = props => {

    const [mode, setMode] = useState(false)

    const toTop = () => {
        scroll.scrollToTop()
    }

    return (
        <React.Fragment>
            <Head>
                <title>Рестораны цахим захиалгын систем</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Рестораны цахим захиалгын систем" />
                <meta name="author" content="Quinno LLC" />
                <meta property="og:title" content="QR код дээр суурилсан Рестораны цахим меню" key="ogtitle" />
                <meta property="og:type" content="website" key="ogtype" />
                <meta property="og:description" content="Рестораны цахим меню" key="ogdesc" />
                <meta name="twitter:title" content="Рестораны цахим меню" />
                <meta name="twitter:description" content="Рестораны цахим меню" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav mode={mode} setMode={setMode} />
            <main className={`${mode ? "dark" : "light"}`}>
                {props.children}
                <span onClick={toTop} id="totop">
                    <Image src="/totop.png" width={20} height={20} alt="to top" />
                </span>
            </main>
            <Foot />
        </React.Fragment>
    )
}

export default Template