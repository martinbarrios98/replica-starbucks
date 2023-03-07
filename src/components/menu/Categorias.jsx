import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

export const CategoriasStyles = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    padding: 1rem;
    @media (min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1024px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1280px){
        gap: 10rem;
    }
    .item-categoria{
        display: grid;
        gap: 1rem;
        @media (min-width: 1024px){
            &:hover{
                .contenedor-img{
                    border: 10px solid var(--verdeBajo);
                }
            }
        }
        .contenedor-img{
            display: grid;
            place-items: center;
            border-radius: 50%;
            padding: 1rem 0;
            background-color: var(--verdeOscuro);
            border: 10px solid transparent;
            transition: all .2s ease-in-out;
            img{
                width: 10rem;
                @media (min-width: 768px){
                    width: 15rem;
                }
                @media (min-width: 1280px){
                    width: auto;
                }
            }
        }
        p{
            text-align: center;
            font-family: var(--fuentePrincipalSemiBold);
        }
    }
`;


const Categorias = ({ categorias }) => {
    return (  
        <CategoriasStyles>
            {
                categorias.map( ct => (
                    <Link
                        href={`/menu/bebidas/${ct.slug}`}
                        title={ct.nombre}
                        target={'_self'}
                        passHref
                    >
                        <li className='item-categoria' key={ct.id} >
                            <div className='contenedor-img' >
                                <Image 
                                    src={ct.img}
                                    alt={ct.nombre}
                                    title={ct.nombre}
                                    width={1400}
                                    height={1000}
                                />
                            </div>
                            <p>{ct.nombre}</p>
                        </li>
                    </Link>
                ) )
            }
        </CategoriasStyles>
    );
}
 
export default Categorias;