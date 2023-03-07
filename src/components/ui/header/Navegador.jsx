import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useRouter } from 'next/router';

export const NavegadorStyles = styled.div`
    flex-basis: 100%;
    right: 0;
    height: ${props => props.menu ? '30rem' : '0'};
    background-color: var(--blanco);
    padding: ${props => props.menu ? '3rem 0' : '0'};
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    transition: all .2s ease-in-out;
    @media (min-width: 768px){
        height: auto;
        flex-basis: 90%;
        padding: 0;
    }
    @media (min-width: 1024px){
        flex-basis: 92%;
    }
    nav{
        width: 70%;
        @media (min-width: 768px){
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
        .enlaces{
            display: grid;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            border-bottom: 1px solid #eee;
            padding-bottom: 3rem;
            @media (min-width: 768px){
                border-bottom: none;
                display: flex;
                padding-bottom: 0;
            }
            a{
                font-weight: 500;
                text-transform: uppercase;
                font-family: var(--fuentePrincipalSemiBold);
                transition: all .2s ease-in-out;
                position: relative;
                @media (min-width: 768px){
                    font-size: 1.4rem;
                }
                @media (min-width: 1024px){
                    &::before{
                        bottom: -.5rem;
                        background: transparent;
                        content: "";
                        height: .5rem;
                        display: block;
                        position: absolute;
                        width: 100%;
                        transform: skew(25deg);
                        transition: all .2s ease-in-out;
                    }
                    &:hover{
                        color: var(--verde);
                        &::before{
                            background: var(--verde);
                        }
                    }
                }
                &.activo{
                    color: var(--verde);
                    &::before{
                        bottom: -.5rem;
                        background: var(--verde);
                        content: "";
                        height: .5rem;
                        display: block;
                        position: absolute;
                        width: 100%;
                        transform: skew(25deg);
                        transition: all .2s ease-in-out;
                    }
                }
            }
        }
        .opciones{
            padding-top: 2rem;
            @media (min-width: 768px){
                border-bottom: none;
                display: flex;
                gap: 3rem;
                padding: 0;
                align-items: center;
            }
            .contenedor-localiza{
                display: flex;
                align-items: center;
                font-size: 1.5rem;
                gap: .5rem;
                .contenedor-icono{
                    display: grid;
                    place-items: center;
                }
                p{
                    font-size: 1.7rem;        
                    font-family: var(--fuentePrincipalSemiBold);
                    @media (min-width: 768px){
                        font-size: 1.4rem;
                    }
                }
            }
            .contenedor-botones{
                margin-top: 2rem;
                display: flex;
                gap: 2rem;
                @media (min-width: 768px){
                    margin-top: 0;
                }
            }
        }
    }
`;

export const BotonPrimario = styled.button`
    background-color: var(--negro);
    border: 1px solid var(--negro);
    color: var(--blanco);
    padding: .5rem 2rem;
    border-radius: 3rem;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all .2s ease-in-out;
`;

export const BotonSecundario = styled.button`
    background-color: transparent;
    border: 1px solid var(--negro);
    color: var(--negro);
    padding: .5rem 2rem;
    border-radius: 3rem;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover{
        background-color: rgba(255,255,255,.12);
    }
`;

const Navegador = ({ menu }) => {

    const { pathname } = useRouter();

    return (  
        <NavegadorStyles
            menu={menu}
        >
            <nav>
                <div className='enlaces' >
                    <Link
                        href={'/menu'}
                        title="Menú"
                        className={ pathname === '/menu' ? 'activo' : '' }
                    >Menú</Link>
                    <Link
                        href={'https://rewards.starbucks.mx/'}
                        title="Rewards"
                        target={'_blank'}
                    >Rewards</Link>
                </div>
                <div className='opciones' >
                    <Link
                        href={'/stores'}
                        title="Tiendas"
                        target={'_self'}
                    >
                        
                        <div className='contenedor-localiza' >
                            <div className='contenedor-icono' >
                                <FaMapMarkerAlt fontSize={'20px'} color='var(--negro)' />
                            </div>
                            <p>Localizar Tienda</p>
                        </div>
                    </Link>
                    <div className='contenedor-botones' >
                        <Link
                            href={'/login'}
                            title="Iniciar Sesión"
                        >
                            <BotonSecundario
                                type='button'
                            >Ingresar</BotonSecundario>
                        </Link>
                        <Link
                            href={'/register'}
                            title="Registro"
                        >
                            <BotonPrimario
                                type='button'
                            >Únete</BotonPrimario>
                        </Link>
                    </div>
                </div>
            </nav>
        </NavegadorStyles>
    );
}
 
export default Navegador;
