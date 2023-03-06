import Inicio from '@/components/home';
import Layout from '@/components/layouts';
import React from 'react'

const IndexPage = () => {
    return (  
        <Layout
            pagina={'Homepage'}
            description='Bienvenido starbucks, los mejores cafes y servicios que nuestros clientes merece.'
        >
            <Inicio />
        </Layout>
    );
}
 
export default IndexPage;