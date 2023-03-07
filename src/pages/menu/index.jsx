import Layout from '@/components/layouts';
import Menu from '@/components/menu';
import axios from 'axios';
import React from 'react'

const MenuPage = ({ menu, error }) => {

    return (  
        <Layout
            pagina={'Menú'}
            description='Menú starbucks, los mejores cafes y servicios que nuestros clientes merece.'
        >
            
            {
                error ?
                    <p>Error</p>
                :   <Menu menu={menu} />
            }
        </Layout>
    );
}



export const getServerSideProps = async (context) => {

    try {

        const { data } = await axios.get(`${process.env.URL_BACK}/api/get_menu`);

        return {
            props: {
                menu: data
            }
        }

    } catch (error) {

        return {
            props: {
                menu: null,
                error
            }
        }

    }

}
 
export default MenuPage;