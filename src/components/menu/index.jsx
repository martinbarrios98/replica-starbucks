
import React from 'react'
import styled from 'styled-components';
import HeadingTitles from '../ui/headings/HeadingTitle';
import Categorias from './Categorias';

export const MenuStyles = styled.section`
    display: grid;
    gap: 2rem;
    .item-menu{
        h4{
            margin: 0;
            padding: 1.5rem 0;
            border-top: 1px solid var(--negro);
            border-bottom: 1px solid var(--negro);
            font-size: 2rem;
        }
    }
`;

const Menu = ({ menu }) => {
    return (  
        <MenuStyles
            className='contenedor'
        >
            <HeadingTitles 
                titulo={'Conoce nuestras bebidas y alimentos de temporada'}
                parrafo="¡Disfrútalos!"
            />
            {
                menu.map( mn => (
                    <div className='item-menu' key={mn.id}>
                        <h4>{mn.nombre}</h4>
                        <Categorias 
                            categorias={mn.lista_categorias.categorias}
                        />
                    </div>
                ))
            }
        </MenuStyles>
    );
}

 
export default Menu;
