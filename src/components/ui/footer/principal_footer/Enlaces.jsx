import Link from 'next/link';
import React, { useState } from 'react'
import styled from 'styled-components';

export const EnlacesStyles = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    @media (min-width: 768px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    li{
        position: relative;
        a{
            font-size: 1.3rem;
            transition: all .1 ease-in-out;
            @media (min-width: 768px){
                color: var(--gris);
            }
        }
        @media (min-width: 768px){
            &::after{
                content: '|';    
                display: block;
                position: absolute;
                right: -15px;
                top: 0;
                color: var(--gris);
            }
            &:last-of-type{
                &::after{
                    display: none;
                }
            }
        }
    }
`;

const Enlaces = () => {

    const [ enlaces, setEnlaces ] = useState([
        {
            url: '/articulo/accesibilidad-web',
            titulo: 'Accesibilidad Web MX',
            target: '_self'
        },
        {
            url: '/articulo/aviso-de-privacidad',
            titulo: 'Aviso de Privacidad',
            target: '_self'
        },
        {
            url: '/seccion/boletines',
            titulo: 'Noticias',
            target: '_self'
        },
        {
            url: '/articulo/condiciones-de-uso-1',
            titulo: 'Condiciones de Uso',
            target: '_self'
        },
        {
            url: '/articulo/mapa-del-sitio',
            titulo: 'Mapa del Sitio',
            target: '_self'
        },
        {
            url: '/articulo/preferencias-sobre-cookie',
            titulo: 'Preferencias sobre cookies',
            target: '_self'
        }
    ]);

    return (  
        <EnlacesStyles>
            {
                enlaces.map( el => (
                    <li 
                        key={el.titulo} 
                    >
                        <Link
                            href={el.url}
                            title={el.titulo}
                            target={el.target}
                        >{el.titulo}</Link>
                    </li>
                ))
            }
        </EnlacesStyles>
    );
}
 
export default Enlaces;

