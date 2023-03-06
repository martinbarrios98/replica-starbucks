import React from 'react'
import '@/styles/normalize.css';
import AppProvider from '@/context/AppProvider';

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