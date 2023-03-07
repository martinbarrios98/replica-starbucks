import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

export const HeadingPositiontyles = styled.div`
    display: grid;
    gap: .5rem;
    margin-top: 3rem;
    p,a{
        margin: 0;
        color: var(--gris);
        span{
            font-family: var(--fuentePrincipalSemiBold);
        }
    }
    h1{
        font-family: var(--fuentePrincipalBold);
        margin: 0;
        font-size: 2.5rem;
        line-height: 1.5;
    }
`;

const HeadingPosition = ({ parrafo, titulo }) => {
    return (  
        <HeadingPositiontyles>
            <p> <Link href={'/menu'} title="Menú" target={'_self'} >Menú / </Link><span>{parrafo}</span></p>
            <h1>{titulo}</h1>
        </HeadingPositiontyles>
    );
}
 
export default HeadingPosition;
