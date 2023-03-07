import React, { useState } from 'react'
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiBars4 } from 'react-icons/hi2'
import { IoCloseOutline } from 'react-icons/io5'
import Navegador from './Navegador';
import { useRouter } from 'next/router';

export const HeaderStyles = styled(motion.header)`
    padding: 1rem;
    box-shadow: 0 3px 3px rgb(0 0 0 / 10%);
    z-index: 3;
    background-color: var(--blanco);
    @media (min-width: 768px){
        padding: 2rem;
    }
    .contenedor-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        flex-wrap: wrap;
        position: sticky;
        top: 0;
        left: 0;
        margin-top: 0!important;
        margin-bottom: 0!important;
        .contenedor-iconos{
            display: grid;
            place-items: center;
            @media (min-width: 768px){
                display: none;
            }
        }
        .contenedor-logo{
            display: grid;
            place-items: center;
            cursor: pointer;
        }
    }
`;


const Header = () => {

    const { push } = useRouter();

    const [ menu, setMenu ] = useState(false);

    const handleMostrarMenu = () => setMenu( menu ? false : true );

    return (
        <AnimatePresence mode='wait' >
            <HeaderStyles
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
            >
                <div className='contenedor contenedor-header' >
                    <div className='contenedor-logo' onClick={() => push('/')} >
                        <Image 
                            src={'https://www.starbucks.com.mx/static/images/logo.svg'}
                            width={50}
                            height={50}
                            alt={'Starbucks'}
                            title={'Starbucks'}
                        />
                    </div>
                    <div className='contenedor-iconos' onClick={() => handleMostrarMenu()} >
                        {
                            menu ? <IoCloseOutline 
                                fontSize={'30px'}
                                color={'var(--gris)'}
                            />
                            : <HiBars4 
                                fontSize={'30px'}
                                color={'var(--gris)'}
                            />
                        }
                    </div>
                    <Navegador menu={menu} />
                </div>
            </HeaderStyles>
        </AnimatePresence>
    );
}
 
export default Header;