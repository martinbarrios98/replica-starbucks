import React from 'react'
import styled from 'styled-components';
import Error from '../error';

export const NoEncontrado404Styles = styled.section`
    background-color: var(--gris_bajo);
    display: grid;
    place-items: center;
    padding: 3rem 0;
`;


const NoEncontrado404 = () => {
    return (  
        <NoEncontrado404Styles>
            <Error 
                codigo={404}
                titulo={'No podemos encontrar la página que buscaba.'}
                descripcion="Puede intentar volver a escribir la URL."
            />
        </NoEncontrado404Styles>    
    );
}
 
export default NoEncontrado404;