import React from 'react'
import styled from 'styled-components';

export const HeadingTitleStyles = styled.div`
    display: grid;
    gap: .5rem;
    margin-top: 3rem;
    p{
        font-family: var(--fuentePrincipalSemiBold);
        margin: 0;
    }
    h1{
        font-family: var(--fuentePrincipalBold);
        margin: 0;
        font-size: 2.5rem;
        line-height: 1.5;
    }
`;

const HeadingTitles = ({ parrafo, titulo }) => {
    return (  
        <HeadingTitleStyles>
            <p>{parrafo}</p>
            <h1>{titulo}</h1>
        </HeadingTitleStyles>
    );
}
 
export default HeadingTitles;
