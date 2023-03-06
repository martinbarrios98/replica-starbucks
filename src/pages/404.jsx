import Layout from '@/components/layouts';
import NoEncontrado404 from '@/components/ui/errors/no-encontrado';
import React from 'react'

const ErrorPage = () => {
    return (  
        <Layout
            pagina={'No encontrado'}
            description='No encontramos está pagina en starbucks, los mejores cafes y servicios que nuestros clientes merece.'
        >
            <NoEncontrado404 />
        </Layout>
    );
}
 
export default ErrorPage;