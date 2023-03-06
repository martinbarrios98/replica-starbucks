import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

export const BannerStyles = styled.article`
    min-height: 10rem;
    background-color: ${props => props.background};
    display: grid;
    gap: 2rem;
    padding-bottom: 5rem;
    @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        padding: 0;
        gap: 3rem;
        &:nth-child(even){
            img{
                grid-column: 2/3;
                grid-row: 1;
            }
            .contenedor-banner{
                grid-column: 1/2;
            }
        }
    } 
    @media (min-width: 1024px){
        padding: 0;
    } 
    .contenido-banner{
        display: grid;
        place-items: center;
        text-align: center;
        padding: 1rem;
        gap: 2.5rem;
        h2, h3{
            margin: 0;
            color: ${props => props.text_color};
            font-family: var(--fuentePrincipalBold);
        }
        p{
            margin: 0;
            line-height: 1.5;
            color: ${props => props.text_color};
        }
        button{
            border: 1px solid ${props => props.text_color};
            color: ${props => props.text_color};
            background-color: transparent;
            padding: .6rem 1.5rem;
            border-radius: 3rem;
            cursor: pointer;
        }
    }
`;

const Banner = ({ banner }) => {

    const { nodos_texto } = banner;

    return (  
        <BannerStyles
            background={banner.background}
            text_color={banner.text_color}
        >
            <Image 
                src={banner.img.url} 
                title={banner.img.titulo}
                alt={banner.img.titulo}
                width={1400}
                height={1000}             
            />
            <div className='contenido-banner' >
                <h3>{nodos_texto.titulo}</h3>
                <p>{nodos_texto.descripcion}</p>
                { nodos_texto.descripcion_secundaria ? <p>{nodos_texto.descripcion_secundaria}</p> : null }
                { nodos_texto.enlace ? 
                    <Link
                        href={nodos_texto.enlace}
                        target='_blank'
                        title={nodos_texto.titulo}
                    >
                        <button type='button' >Más Información</button>
                    </Link>
                : null }
            </div>
        </BannerStyles>
    );
}
 
export default Banner;
