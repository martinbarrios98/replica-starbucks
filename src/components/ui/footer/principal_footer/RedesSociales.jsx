import React, { useState } from 'react'
import styled from 'styled-components';
import { GrFacebookOption } from 'react-icons/gr'
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link';

export const RedesSocialesStyles = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    gap: 2rem;
    align-items: center;
    @media (min-width: 768px){
        justify-content: center;
        gap: 4rem;
    }
    li{
        background-color: var(--negro);
        display: grid;
        place-items: center;
        padding: .5rem;
        border-radius: 50%;
        transition: all .2s ease-in-out;
        &:hover{
            opacity: .8;
            transform: translateY(-2px);
        }
        a{
            display: grid;
            place-items: center;
        }
    }
`;


const RedesSociales = () => {

    const [ redes, setRedes ] = useState([
        {
            componente: <GrFacebookOption fontSize={'25px'} color="var(--blanco)" />,
            url: 'https://www.facebook.com/StarbucksMexico',
            titulo: 'Facebook',
            target: '_blank'
        },
        {
            componente: <AiFillInstagram fontSize={'25px'} color="var(--blanco)" />,
            url: 'https://www.instagram.com/starbucksMex/',
            titulo: 'Instagram',
            target: '_blank'
        },
        {
            componente: <AiOutlineTwitter fontSize={'25px'} color="var(--blanco)" />,
            url: 'https://twitter.com/StarbucksMex',
            titulo: 'Twitter',
            target: '_blank'
        },
        {
            componente: <AiFillYoutube fontSize={'25px'} color="var(--blanco)" />,
            url: 'https://www.youtube.com/user/StarbucksMexico?app=desktop',
            titulo: 'YouTube',
            target: '_blank'
        }
    ]);

    return (  
        <RedesSocialesStyles>
            {
                redes.map( rd => (
                    <li
                        key={rd.titulo}
                    >
                        <Link
                            href={rd.url}
                            title={rd.titulo}
                            target={rd.target}
                        >{rd.componente}</Link>
                    </li>
                ))
            }
        </RedesSocialesStyles>
    );
}
 
export default RedesSociales;