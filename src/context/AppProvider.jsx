import { createContext, useState } from "react";
import { v4 as uuidv4, v4 } from 'uuid';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    
    const [ bannersInicio, setBannersInicio ] = useState([
        {
            id: v4(),
            img: {
                url: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-02%2Fsitio-web_Home_Spring_23_A_Shaken.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max',
                titulo:'ES MOMENTO DE RECARGARTE DE FELICIDAD'
            },
            nodos_texto: {
                titulo: 'ES MOMENTO DERECARGARTE DE FELICIDAD',
                descripcion:'Dale nuevos sabores a tu primavera con nuestros nuevos Shaken Espresso Helados.',
                descripcion_secundaria: null,
                enlace: null,
                mencion: null
            },
            background: '#ffc619',
            text_color: '#1e3932'
        },
        {
            id: v4(),
            img: {
                url: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-02%2Fsitio-web_Home_Spring_23_A_Chiapas.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max',
                titulo:'UN CAFÉ SUAVE PARA BEBER: CAFÉ CHIAPAS'
            },
            nodos_texto: {
                titulo: 'UN CAFÉ SUAVE PARA BEBER: CAFÉ CHIAPAS',
                descripcion: 'Un café tostado, 100% mexicano que exalta la riqueza natural de la región montañosa alta del bosque tropical del sur.',
                descripcion_secundaria: null,
                enlace: null,
                mencion: null
            },
            background: '#1e3932',
            text_color: '#fff'
        },
        {
            id: v4(),
            img: {
                url: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-02%2Fsitio-web_Home_Spring_23_A_cookies.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max',
                titulo:'ASI SABEN LOS DÍAS FELICES'
            },
            nodos_texto: {
                titulo: 'ASI SABEN LOS DÍAS FELICES',
                descripcion: 'Una nueva oportunidad para disfrutar nuestros deliciosos Cookies & Cream Frappuccino®.',
                descripcion_secundaria: '¿Cuál se te antoja más?',
                enlace: null,
                mencion: null
            },
            background: '#fcd299',
            text_color: '#554725'
        },
        {
            id: v4(),
            img: {
                url: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-02%2Fsitio-web_Home_Spring_23_A_yogurt.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max',
                titulo:'¡HOLA PRIMAVERA!'
            },
            nodos_texto: {
                titulo: '¡HOLA PRIMAVERA!',
                descripcion: 'Vive tu primavera con una sonrisa deliciosa. Prueba nuestros Frappuccino® de Yogurt.',
                descripcion_secundaria: null,
                enlace: null,
                mencion: null
            },
            background: '#f6bfd9',
            text_color: '#000'
        },
        {
            id: v4(),
            img: {
                url: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-01%2Fsitio%20web_Home_winter_23_PNG_omnicanalidad.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max',
                titulo:'LA FELICIDAD COMO Y DONDE TÚ QUIERAS'
            },
            nodos_texto: {
                titulo: 'LA FELICIDAD COMO Y DONDE TÚ QUIERAS',
                descripcion: 'Ordena desde nuestra app y recibe en casa con Starbucks Rewards Delivery, recoge en tienda a través de Pickup o desde tu auto con Car Pickup.',
                descripcion_secundaria: null,
                enlace: 'https://rewards.starbucks.mx/',
                mencion: null
            },
            background: '#d4e9e2',
            text_color: '#1e3932'
        },
        {
            id: v4(),
            img: {
                url: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-01%2Fsitio%20web_Home_winter_23_PNG_Rewards.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max',
                titulo:'ES MOMENTO DE MÁS CAFÉ GRATIS Y BENEFICIOS EXCLUSIVOS'
            },
            nodos_texto: {
                titulo: 'ES MOMENTO DE MÁS CAFÉ GRATIS Y BENEFICIOS EXCLUSIVOS',
                descripcion: 'Sé parte de Starbucks Rewards y descubre un mundo lleno de recompensas: café gratis, acceso anticipado a nuevos productos, promociones exclusivas y más.',
                descripcion_secundaria: null,
                enlace: null,
                mencion: null
            },
            background: '#1e3932',
            text_color: '#fff'
        },
        {
            id: v4(),
            img: {
                url: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-02%2Fsitio-web_Home_Spring_23_A_Merch.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max',
                titulo:'HAGAMOS ALGO BUENO JUNTOS'
            },
            nodos_texto: {
                titulo: 'HAGAMOS ALGO BUENO JUNTOS',
                descripcion: 'Trae tu vaso, taza o termo a tu Starbucks favorito y obtén $8 pesos de descuento en tu bebida.',
                descripcion_secundaria: '#HagamosElCambio',
                enlace: null,
                mencion: null
            },
            background: '#f9423a',
            text_color: '#fff'
        },
    ]);

    const [ bannersFooter, setBannersFooter ] = useState([
        {
            id: v4(),
            img:{
                url: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-02%2Fsitio-web_Home_Spring_23_A_Noticias.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=740&fit=max&dpr=2',
                titulo: 'Noticias Starbucks'
            },
            descripcion: 'Consulta los eventos más recientes.',
            enlace: '/seccion/boletines',
            background: '#f9423a'
        },
        {
            id: v4(),
            img:{
                url: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2023-02%2Fsitio-web_Home_Spring_23_A_TC.png?auto=format,compress&q=70&crop=focalpoint&ar=1.8:1.0&w=1400&fit=max',
                titulo: 'Términos y condiciones'
            },
            descripcion: 'Términos y condiciones',
            enlace: '/seccion/terminos-y-condiciones',
            background: '#ffc619'
        }
    ]);

    const [ menu, setMenu ] = useState([]);
    
    const store = {
        bannersInicio,
        bannersFooter,
        menu
    }

    return (  
        <AppContext.Provider
            value={store}
        >{children}</AppContext.Provider>
    );
}
 
export default AppProvider;