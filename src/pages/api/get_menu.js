import { v4 } from 'uuid';

export default function (req, res) {

    res.status(200).json([
        {   
            id: v4(),
            nombre: 'Bebidas',
            slug: 'bebidas',
            lista_categorias:{
                categorias:[
                    {
                        id: v4(),
                        nombre: 'Bebidas calientes',
                        slug: 'calientes',
                        lista_subcategorias:[
                            {
                                id: v4(),
                                nombre: 'Expreso y Café',
                                lista_productos:[
                                    {
                                        id: v4(),
                                        nombre: 'Espresso Americano',
                                        slug: 'expresso-americano',
                                        calorias: 0,
                                        descripcion: 'Los shots de espresso cubiertos con agua caliente crean una ligera capa de crema que culmina en esta taza de maravillosa profundidad.',
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fespresso-americano_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop'
                                    }
                                ]
                            },
                            {
                                id: v4(),
                                nombre: 'Espresso Tradicional',
                                lista_productos:[
                                    {
                                        id: v4(),
                                        nombre: 'Espresso Americano',
                                        slug: 'expresso-americano',
                                        calorias: 0,
                                        descripcion: 'Los shots de espresso cubiertos con agua caliente crean una ligera capa de crema que culmina en esta taza de maravillosa profundidad.',
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fespresso-americano_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    ])

}