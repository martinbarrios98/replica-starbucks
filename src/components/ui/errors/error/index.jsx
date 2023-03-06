import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';

export const ErrorStyles = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: grid;
    place-items: center;
    .contenido-error{
        display: grid;
        place-items: center;
        gap: 2rem;
        .contenedor-img{
            display: grid;
            place-items: center;
            img{
                width: 20rem;
            }
        }
        h1{
            font-family: var(--fuentePrincipalBold);
            margin: 0;
        }
        p{
            text-align: center;
            margin: 0;
            font-family: var(--fuentePrincipal);
        }
    }
`;


const Error = ({ codigo, titulo, descripcion }) => {
    return (  
        <ErrorStyles
            className='contenedor'
        >
            <div className='contenido-error' >
                <div className='contenedor-img' >
                    <Image 
                        src={'/img/coffe.svg'}
                        alt='¡Ops!'
                        title={titulo + ' ' + descripcion}
                        width={1400}
                        height={1000}
                    />
                </div>
                <h1>¡Ops!</h1>
                <p>{titulo}</p>
                <p>{descripcion}</p>
            </div>
        </ErrorStyles>
    );
}
 
export default Error;