import React from 'react'
import  NProgress  from 'nprogress';

import '../styles/nprogress.css';

import '@/styles/normalize.css';

import AppProvider from '@/context/AppProvider';
import { Router } from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
    return (  
        <AppProvider>
            <Component 
                {...pageProps}
            />
        </AppProvider>
    );
}
 
export default App;