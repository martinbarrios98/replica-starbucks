import { getDateFormat, getHourFormat } from '@/utils';
import React from 'react'
import styled from 'styled-components';

export const DerechosReservadosStyles = styled.div`
    display: grid;
    place-items: center;
    gap: .5rem;
    p{
        margin: 0;
        font-size: 1.2rem;
        color: var(--gris);
        @media (min-width: 768px){
            text-align: center;
        }
        &:last-of-type{
            font-size: 1rem;
        }
    }
`;

const DerechosReservados = () => {
    return (  
        <DerechosReservadosStyles>
            <p>Ⓒ 2023. Starbucks Cofee Company. Reservados todos los derechos</p>
            <p>mx | prod | 08cdb08737b7e80eef3820bd86c4f2bbeeb1318c | {getDateFormat()} - {getHourFormat()}</p>
        </DerechosReservadosStyles>
    );
}
 
export default DerechosReservados;
