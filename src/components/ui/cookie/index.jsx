import React, { useState } from 'react'
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { BotonPrimario } from '../header/Navegador';

export const CookieStyles = styled(motion.div)`
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0 1px 4px rgb(0 0 0 / 58%);
    padding: 2rem;
    display: grid;
    gap: 3rem;
    z-index: 99;
    background-color: var(--blanco);
    width: 100%;
    @media (min-width: 768px){
        display: grid;
        grid-template-columns: 3fr 1fr;
        align-items: center;
    }
    @media (min-width: 1100px){
        display: grid;
        grid-template-columns: 85% 15%;
    }
    .informacion{
        display: grid;
        gap: 1rem;
        p{
            margin: 0;
            font-size: 1.4rem;
            line-height: 1.5;
            a{
                text-decoration: underline;
                padding: 0 .5rem;
                cursor: pointer;
            }
            &:first-of-type{
                font-family: var(--fuentePrincipalBold);
            }
        }
    }
    .contenedor-boton{
        @media (min-width: 768px){
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
    }
`;

const Cookie = () => {

    const [ cookieAceptada, setCookieAceptada ] = useState(false);

    if(cookieAceptada) return;

    return (  
        <AnimatePresence mode='wait' >
            <CookieStyles
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
            >
                <div className='informacion' >
                    <p>Este sitio usa cookies.</p>
                    <p>
                        Al navegar en nuestro sitio aceptas que usemos cookies para 
                        <Link 
                            href={'/articulo/declaracion-privacidad'} 
                            title="Declaración Privacidad"
                            target={'_blank'}
                        >personalizar tu experiencia</Link> 
                        según la Declaración de Privacidad.</p>
                </div>
                <div className='contenedor-boton' >
                    <BotonPrimario 
                        type='button'
                        onClick={() => setCookieAceptada(true)}
                    >Acepto</BotonPrimario>
                </div>
            </CookieStyles>
        </AnimatePresence>
    );
}
 
export default Cookie;