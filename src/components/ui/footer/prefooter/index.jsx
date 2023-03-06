import Link from 'next/link';
import React, { useState } from 'react'
import styled from 'styled-components';
import Enlace from './Enlace';

export const PreFooterStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (min-width: 1024px){
        flex-direction: row;
        gap: 3rem;
    }
`;

const PreFooter = () => {
    
    const [ enlaces, setEnlaces ] = useState([
        {
            titulo: 'Sobre Nosotros',
            links: [
                {
                    titulo: 'Trabaja con nosotros',
                    external: false,
                    src: '/seccion/trabaja-con-nosotros',
                    target: '_self'
                },
                {
                    titulo: 'Historias Starbucks',
                    external: true,
                    src: 'https://historias.starbucks.com/es/',
                    target: '_blank'
                }
            ]
        },
        {
            titulo: 'Atención al clientes',
            links: [
                {
                    titulo: 'Facturas Electrónicas',
                    external: true,
                    src: 'https://alsea.interfactura.com/RegistroDocumento.aspx?opc=Starbucks',
                    target: '_blank'
                },
                {
                    titulo: 'Formas de comprar',
                    external: false,
                    src: '/seccion/experiencia-starbucks',
                    target: '_self'
                }
            ]
        }
    ])

    return (  
        <PreFooterStyles
            className='contenedor'
        >
            {
                enlaces.map( (enlace, i) => (
                    <Enlace 
                        enlace={enlace}
                        key={i}
                    />
                ))
            }
        </PreFooterStyles>
    );
}
 
export default PreFooter;
