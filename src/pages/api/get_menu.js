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
                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FFlat%20White%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
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
                                    },
                                    {
                                        id: v4(),
                                        nombre: 'Flat White',
                                        slug: 'flat-white',
                                        calorias: 200,
                                        descripcion: 'Los suaves shots de ristretto, de espresso, obtienen la cantidad perfecta de leche entera al vapor para crear un sabor no demasiado fuerte, no demasiado cremoso y perfecto.',
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fflat-white_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2'
                                    },
                                    {
                                        id: v4(),
                                        nombre: 'Mocha Blanco',
                                        slug: 'mocha-blanco',
                                        calorias: 410,
                                        descripcion: 'Nuestro característico espresso se combina con salsa de chocolate blanco, leche al vapor y crema batida crean esta delicia suprema de chocolate blanco.',
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fmocha-blanco_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2'
                                    },
                                ]
                            },
                            {
                                id: v4(),
                                nombre: 'Alternativas al Café',
                                lista_productos:[
                                    {
                                        id: v4(),
                                        nombre: 'Chocolate Caliente',
                                        slug: 'chocolate-caliente',
                                        calorias: 310,
                                        descripcion: 'Leche vaporizada combinada con salsa de chocolate y vainilla, cubierto con crema batida y espiral de salsa de chocolate.',
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fchocolate-caliente_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2'
                                    },
                                    {
                                        id: v4(),
                                        nombre: 'Chocolate Blanco',
                                        slug: 'chocolate-blanco',
                                        calorias: 410,
                                        descripcion: 'Deliciosa combinación de salsa de chocolate blanco, con leche vaporizada y decorada con crema batida.',
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fchocolate-blanco-frappuccino_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2'
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        id: v4(),
                        nombre: 'Cold Brew',
                        slug: 'cold-brew',
                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCold%20Brew%20Vainilla%20Sweet%20Cream%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
                        lista_subcategorias:[
                            {
                                id: v4(),
                                nombre: 'Starbucks Con Hielo',
                                lista_productos:[
                                    {
                                        id: v4(),
                                        nombre: 'Vainilla Sweet Cream Cold Brew',
                                        slug: 'vainilla-sweet-cream-cold-brew',
                                        calorias: 190,
                                        descripcion: 'Bebida refrescante y re-energizante, preparada artesanalmente con un toque de vainilla.',
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fvainilla-sweet-cream-cold-brew_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2'
                                    },
                                    {
                                        id: v4(),
                                        nombre: 'Cold Brew',
                                        slug: 'cold-brew',
                                        calorias: 60,
                                        descripcion: 'Café preparado artesanalmente e infusionado durante 20 hrs. para extraer sabores excepcionales.',
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2Fcold-brew_0_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        {   
            id: v4(),
            nombre: 'Alimentos',
            slug: 'alimentos',
            lista_categorias:{
                categorias:[
                    {
                        id: v4(),
                        nombre: 'Elige tu complemento favorito',
                        slug: 'elige-tu-complemento-favorito',
                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FSandwich%20Pavo%20Panela_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
                        lista_subcategorias:[
                            {
                                id: v4(),
                                nombre: 'Salado',
                                lista_productos:[
                                    {
                                        id: v4(),
                                        nombre: 'Sándwich Pavo Panela',
                                        slug: 'sandwich-pavo-panela',
                                        calorias: 'kcal 433,2g',
                                        descripcion: null,
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FSandwich%20Pavo%20Panela_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
                                        ingredientes: 'Pan multigrano (harina de trigo, agua, harina integral, amaranto, harina de centeno, mezcla de semillas (ajonjolí blanco, salvado, avena, linaza, semilla de girasol, ajonjolí negro), mejorantes para panadería, propionato de sodio, sulfato de aluminio y sodio [como conservador], gluten de trigo, fibra de avena, ajonjolí negro y blanco), queso panela (leche entera fluida de vaca, proteína concentrada de leche, grasa vegetal, estabilizante, cloruro de calcio, cuajo y sal yodada), jamón de pechuga de pavo (pechuga de pavo, soya, agua, nitritos, nitratos y fosfatos de sodio, color rojo carmín, dextrosa y extracto sabor humo natural), hojas de espinaca y/o lechuga, aderezo de yogurt (Yogurt natural (leche entera pasteurizada de vaca, leche descremada en polvo, crema pasteurizada de leche de vaca, azúcar, estabilizantes y cultivos liofilizados), crema entera (crema pasteurizada de vaca con 25% grasa, ácido cítrico, mono y diglicéridos, goma guar y benzoato de sodio (0.025%) como conservador), aderezo mayonesa (agua, azúcar y/o jarabe de maíz de alta fructosa, aceite de soya, almidón de maíz modificado, yema de huevo, sal yodada, ácido acético, harina de mostaza, benzoato de sodio y sorbato de potasio como conservadores, goma de xantano, especias, condimentos, ácido fosfórico), salsa inglesa, cebollín, sal, pimienta negra y conservador).',
                                        alergenos: 'Gluten, soya, huevo, leche y sus derivados.Puede contener trazas de nueces, almendras, cacahuate.',
                                        informacion_nutricional: [
                                            'Kcal Tot. 433,2g',
                                            'kcal_tot: 433,2g',
                                            'Tamaño de la porción: 228g',
                                            'Proteínas: 29,64g',
                                            'Grasas: 18,24g',
                                            'Grasa saturada: 9,12g',
                                            'Carbohidratos: 44,916g',
                                            'Azucares: 3,42g',
                                            'Fibra dietética: 8,436g',
                                            'Sodio: 1436,4mg'
                                        ]
                                    },
                                    {
                                        id: v4(),
                                        nombre: 'Piadini de Claras con Espinaca',
                                        slug: 'piadini-de-claras-con-espinaca',
                                        calorias: 'kcal 323g',
                                        descripcion: null,
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FPiadini%20de%20claras%20con%20Espinacas_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
                                        ingredientes: 'Pan (harina de trigo, agua, aceite de oliva, germen de trigo, sal yodatada, levadura (Saccharomyces cerevisiae), propionato de calcio, mejorante (mezcla de harina de trigo, emulsificantes (alfa amilasas, ADA y ácido ascórbico))), clara de huevo, imitación queso cheddar blanco (proteína de leche y grasa vegetal, adicionado con estabilizantes, ácido cítrico, colorante, sal yodatada y conservador), crema dulce para batir (crema de leche, estabilizador (goma guar, goma de algarrobo, carboximetil-celulosa de sodio y goma xantana)), queso ricotta (leche pasteurizada, suero pasteurizado, vinagre, almidón modificado, goma guar, carragenina, sal yodatada y sorbato de potasio), espinaca, almidón modificado, mantequilla (grasas de leche de vaca, agua, sólidos de la leche, lecitina de soya, sal yodada) y sal yodatada.',
                                        alergenos: 'Gluten, derivados lácteos y huevo. Puede contener trazas de nueces, almendra, cacahuates y soya.',
                                        informacion_nutricional: [
                                            'Kcal Tot. 323g',
                                            'Tamaño de la porción: 190g',
                                            'Proteínas: 20,9g',
                                            'Grasas: 13,3g',
                                            'Grasa saturada: 8,55g',
                                            'Carbohidratos: 29,07g',
                                            'Azucares: 1,71g',
                                            'Fibra dietética: 1g',
                                            'Sodio: 817mg'
                                        ]
                                    }
                                ]
                            },
                            {
                                id: v4(),
                                nombre: 'Panadería',
                                lista_productos:[
                                    {
                                        id: v4(),
                                        nombre: 'Panque de linaza',
                                        slug: 'panque-de-linaza',
                                        calorias: 'Kcal 273,6',
                                        descripcion: null,
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FPanque%20de%20Linaza_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
                                        ingredientes: 'Leche entera, harina de trigo, azúcar moscabado, huevo entero, aceite comestible, granola (hojuelas de avena, hojuelas de maíz, sémola de trigo, almendras, arroz inflado, aceite vegetal de soya, polidextrosa, saborizante natural y artificial,glicerina, sucralosa, sal yodada y antioxidante BHT), miel de abeja, arándano, uva pasa, germen de trigo, linaza, vinagre, monoglicéridos, almidón modificado de trigo, bicarbonato de sodio, canela molida, fibra de avena, leudante (carbonato de calcio, bicarbonato de sodio, sulfato de aluminio y pirofosfato ácido de sodio), propionato de calcio (como conservador), extracto de vainilla, sal yodatada y goma xantana.',
                                        alergenos: 'Gluten, huevo y leche. Puede contener trazas de almendra y nuez',
                                        informacion_nutricional: [
                                            'Kcal Tot. 273,6',
                                            'Tamaño de la porción: 145g',
                                            'Proteínas: 58g',
                                            'Grasas: 72,5g',
                                            'Grasa saturada: 29g',
                                            'Carbohidratos: 449,5g',
                                            'Azucares: 391,5g',
                                            'Fibra dietética: 29g',
                                            'Sodio: 2755mg'
                                        ]
                                    },
                                    {
                                        id: v4(),
                                        nombre: 'Panque de limón',
                                        slug: 'panque-de-limon',
                                        calorias: 'Kcal 460,8',
                                        descripcion: null,
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FPanque%20de%20Limon_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
                                        ingredientes: 'Azúcar refinada, harina de trigo, crema ácida, huevo, aceite comestible de canola, mono y diglicéridos destilados, estearoil lactilato de sodio, leudante (carbonato de calcio, bicarbonato de sodio, sulfato dealuminio y pirofosfato ácido de sodio), sabor limón, sal yodatada, goma xantana, sorbato de potasio (como conservador), agua y color verde.',
                                        alergenos: 'Gluten, huevo y derivados lácteosPuede contener trazas de soya, nuez y cacahuates.',
                                        informacion_nutricional: [
                                            'Kcal Tot. 460,8',
                                            'Tamaño de la porción: 125g',
                                            'Proteínas: 5,8g',
                                            'Grasas: 19,75g',
                                            'Grasa saturada: 1,6375g',
                                            'Carbohidratos: 64,9625g',
                                            'Azucares: 40,425g',
                                            'Fibra dietética: 0g',
                                            'Sodio: 215,5mg'
                                        ]
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        },
        {   
            id: v4(),
            nombre: 'Café en grano',
            slug: 'cafe-en-grano',
            lista_categorias:{
                categorias:[
                    {
                        id: v4(),
                        nombre: 'Elige tu café favorito',
                        slug: 'elige-tu-cafe-favorito',
                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FChiapas_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
                        lista_subcategorias:[
                            {
                                id: v4(),
                                nombre: 'Café de línea',
                                lista_productos:[
                                    {
                                        id: v4(),
                                        nombre: 'Café Verona',
                                        slug: 'cafe-verona',
                                        calorias: null,
                                        descripcion: null,
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FVerona_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
                                        ingredientes: null,
                                        alergenos: null,
                                        informacion_nutricional: null
                                    },
                                    {
                                        id: v4(),
                                        nombre: 'Café Chiapas',
                                        slug: 'cafe-chiapas',
                                        calorias: null,
                                        descripcion: null,
                                        img: 'https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-02%2FChiapas_1.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop&dpr=2',
                                        ingredientes: null,
                                        alergenos: null,
                                        informacion_nutricional: null
                                    },
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    ])

}