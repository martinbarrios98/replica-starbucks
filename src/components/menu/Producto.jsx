import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

export const ProductosStyles = styled.ul`
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
    .item-producto{
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


const Productos = ({ productos }) => {
    return (  
        <ProductosStyles>
            {
                productos.map( pr => (
                    <Link
                        href={`/producto/${pr.slug}`}
                        title={pr.nombre}
                        target={'_self'}
                        key={pr.id}
                        passHref
                    >
                        <li className='item-producto' >
                            <div className='contenedor-img' >
                                <Image 
                                    src={pr.img}
                                    alt={pr.nombre}
                                    title={pr.nombre}
                                    width={1400}
                                    height={1000}
                                />
                            </div>
                            <p>{pr.nombre}</p>
                        </li>
                    </Link>
                ) )
            }
        </ProductosStyles>
    );
}
 
export default Productos;