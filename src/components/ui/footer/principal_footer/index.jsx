import React from 'react'
import styled from 'styled-components';
import dynamic from 'next/dynamic'

import DerechosReservados from './DerechosReservados';
import Enlaces from './Enlaces';
import RedesSociales from './RedesSociales';

export const PrincipalFooterStyles = styled.div`
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #eee;
    display: grid;
    gap: 2rem;
`;


const PrincipalFooter = () => {

    const ClienteDerechosReservados = dynamic(() => import('./DerechosReservados'), {
        ssr: false,
    });

    return (  
        <PrincipalFooterStyles
            className='contenedor'
        >
            <RedesSociales />
            <Enlaces />
            <ClienteDerechosReservados />
        </PrincipalFooterStyles>
    );
}
 
export default PrincipalFooter;