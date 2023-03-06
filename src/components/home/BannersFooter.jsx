import useApp from '@/hooks/useApp';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

export const BannersFotoerStyles = styled.div`
    display: grid;
    gap: 3rem;
    @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
`;

const BannerFooterStyles = styled.div`
    background-color: ${props => props.background};
    display: grid;
    place-items: center;
    gap: 5rem;
    padding-bottom: 10rem;
    text-align: center;
    p{
        color: var(--blanco);
        text-shadow: 1px 1px var(--negro);
        margin-bottom: 2rem;
    }
    a{
        background-color: transparent;
        border: 1px solid var(--blanco);
        padding: .7rem 2rem;
        color: var(--blanco);
        border-radius: 3rem;
        cursor: pointer;
        transition: all .2s ease-in-out;
        &:hover{
            background-color: rgba(255,255,255,.12);
        }
    }
`;


const BannersFooter = () => {

    const { bannersFooter } = useApp();

    return (  
        <BannersFotoerStyles>
            {
                bannersFooter.map( banner => (
                    <BannerFooterStyles
                        key={banner.id}
                        background={banner.background}
                    >
                        <Image 
                            src={banner.img.url}
                            alt={banner.img.titulo}
                            title={banner.img.titulo}
                            width={1400}
                            height={1000}
                        />
                        <div className='contenido-banner' >
                            <p>{banner.descripcion}</p>
                            <Link
                                href={banner.enlace}
                                title={banner.img.titulo}
                                target="_self"
                            >Ver más</Link>
                        </div>
                    </BannerFooterStyles>
                ))
            }
        </BannersFotoerStyles>
    );
}
 
export default BannersFooter;