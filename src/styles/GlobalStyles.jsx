const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
    :root{
        --verde: #00754a;
        --gris: #777;
        --blanco: #fff;
        --negro: #000;
        --gris_bajo: #f9f9f9;
        --fuentePrincipal: SoDo-Light;
        --fuentePrincipalSemiBold: SoDo-SemiBold;
        --fuentePrincipalRegular: SoDo-Regular;
        --fuentePrincipalBold: SoDo-Bold;
    }
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        font-family: var(--fuentePrincipalRegular);
        font-size: 1.6rem;
        min-height: 100vh;
        &.fijo {
            overflow: hidden;
        }
    }
    p {
        font-size: 1.6rem;
        margin: 1rem 0;
        letter-spacing: .2rem;
    }
    .contenedor {
        max-width: 120rem;
        width: 95%;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
        letter-spacing: .2rem;
        color: var(--negro);
    }
    img {
        height: auto;
        max-width: 100%;
    }
    h1, h2, h3 {
        margin: 1rem 0;
        font-family: var(--fuentePrincipalRegular);
        font-weight: 600;
        letter-spacing: .2rem;
    }
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 2rem;
    }
    button{
        font-family: var(--fuentePrincipalSemiBold);
    }
    .contenedor{
        max-width: 120rem;
        width: 90%;
        margin: 2rem auto;
    }
    @font-face {
        font-family: 'SoDo-Light';
        src: url('/fonts/SoDoSans-Light.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'SoDo-Bold';
        src: url('/fonts/SoDoSans-Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'SoDo-Regular';
        src: url('/fonts/SoDoSans-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'SoDo-SemiBold';
        src: url('/fonts/SoDoSans-SemiBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
 
export default GlobalStyles;