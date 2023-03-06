
import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

import useApp from '@/hooks/useApp';
import Banner from './Banner';
import BannersFooter from './BannersFooter';

export const InicioStyles = styled(motion.section)`
    display: grid;
    gap: 3rem;
`;


const Inicio = () => {

    const { bannersInicio } = useApp();

    return (  
        <InicioStyles>
            {
                bannersInicio.map( banner => (
                    <Banner 
                        key={banner.id}
                        banner={banner}
                    />
                ))
            }
            <BannersFooter />
        </InicioStyles>
    );
}
 
export default Inicio;