
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import GlobalStyles from '@/styles/GlobalStyles';

import Cookie from '../ui/cookie';
import Header from '../ui/header';
import Footer from '../ui/footer';

export const ContainerStyles = styled.main`
`;

const Layout = ({ children, pagina, description }) => {

    const { pathname } = useRouter();
    const url_base = 'https://starbucks.com';

    return (  
        <>
            <GlobalStyles />
            <Head>
                <title>{pagina} | Starbucks</title>
                <meta name='title' content={pagina} />
                <meta name='description' content={description} />
                <meta name='icon' content='https://www.starbucks.com.mx/static/images/logo.svg' />
                <meta property="type" content="website" />
                <meta name='og:title' content={pagina} />
                <meta name='og:description' content={description} />
                <meta property="og:type" content="website" />

                <link rel="canonical" href={url_base+pathname} />
                <link rel="icon" type="image/x-icon" href="https://www.starbucks.com.mx/static/images/logo.svg" />
            </Head>
            <Header />
            <ContainerStyles>
                {children}
            </ContainerStyles>
            <Cookie />
            <Footer />
        </>
    );
}
 
export default Layout;