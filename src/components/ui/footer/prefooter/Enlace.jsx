import Link from 'next/link';
import React, { useState } from 'react'
import styled from 'styled-components';
import { RiArrowDownSLine } from 'react-icons/ri'

export const EnlaceStyles = styled.div`
    h4{
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: var(--fuentePrincipal);
        span{
            display: grid;
            place-items: center;
            @media (min-width: 1024px){
                display: none;
            }
        }
    }
    ul{
        list-style: none;
        padding: 0;
        display: grid;
        gap: 1.5rem;
        height: ${props => props.mostrarLinks ? '5.2rem' : '0'};
        transition: all .1s ease-in-out;
        overflow: hidden;
        @media (min-width: 1024px){
            height: auto;
        }
        li{
            a{
                color: var(--gris);
            }
        }
    }
`;


const Enlace = ({ enlace }) => {

    const [ mostrarLinks, setMostrarLinks ] = useState(false);

    return (  
        <EnlaceStyles
            mostrarLinks={mostrarLinks}
        >
            <h4>    
                {enlace.titulo} 
                <span
                    onClick={() => setMostrarLinks( mostrarLinks ? false : true )}
                >
                    <RiArrowDownSLine fontSize={'25px'} color="var(--negro)" />
                </span> 
            </h4>
            <ul className='opciones'>
                {
                    enlace.links.map( (link, i) => (
                        <li
                            key={i}
                        >
                            <Link
                                href={link.src}
                                title={link.titulo}
                                target={link.target}
                            >{link.titulo}</Link>
                        </li>
                    ))
                }
            </ul>
        </EnlaceStyles>
    );
}
 
export default Enlace;