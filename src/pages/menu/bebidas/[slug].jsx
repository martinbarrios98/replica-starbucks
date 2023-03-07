import Layout from '@/components/layouts';
import axios from 'axios';
import React from 'react';

const SlugBebidasPage = ({ menu, error }) => {
    console.log(menu, error);
    return (  
        <Layout
            pagina={'Menú - Bebidas'}
            description='Menú - Bebidas starbucks, los mejores cafes y servicios que nuestros clientes merece.'
        >
            <h1>Desde slug</h1>
        </Layout>
    );
}

export const getServerSideProps = async (context) => {

    const { query } = context;

    if(!query || !query.slug) return {
        props:{
            error: {
                code: 400,
                msg: 'Slug no encontrado.',
                error: null
            },
            menu: null
        }
    }
    
    try {

        const { data } = await axios.get(process.env.URL_BACK+'/api/get_menu_slug?path=bebidas&slug='+query.slug); 

        return{
            props:{
                menu: data.menu,
                error: null
            }
        }

    } catch (error) {
        return{
            props:{
                menu: null,
                error:{
                    code: 400,
                    msg: 'Slug no encontrado.',
                    error: null
                }
            }
        }
    }

}
 
export default SlugBebidasPage;