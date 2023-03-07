import React from 'react'
import styled from 'styled-components';
import { ItemMenuStyles } from '.';
import HeadingPosition from '../ui/headings/HeadingPosition';
import Productos from './Producto';

export const SlugMenuStyles = styled.section`
    display: grid;
    gap: 4rem;
`;


const SlugMenu = ({ menu }) => {
    return (  
        <SlugMenuStyles
            className='contenedor'
        >
            <HeadingPosition 
                parrafo={menu.nombre}
                titulo={menu.nombre}
            />
            {
                menu.lista_subcategorias.map( sct => (
                    <ItemMenuStyles key={sct.id} >
                        <h4>{sct.nombre}</h4>
                        <Productos 
                            productos={sct.lista_productos}
                        />
                    </ItemMenuStyles>
                ))
            }
        </SlugMenuStyles>
    );
}
 
export default SlugMenu;