import axios from "axios";


export default  async function (req, res) {

    const { path, slug } = req.query;

    if(!slug || !path) return res.status(400).json({
        error: {
            code: 400,
            msg: 'Parametros No Encontrados.'
        }
    });

    try {
        
        const { data } = await axios.get(process.env.URL_BACK+'/api/get_menu');

        const arregloPadre = data.find( item => item.slug === path );

        return res.status(200).json({
            menu: arregloPadre.lista_categorias.categorias.filter( item => item.slug === slug ) || []
        });

    } catch (error) {
        return res.status(400).json({
            error: {
                code: 400,
                msg: 'Ocurrio un error.'
            }
        });
    }


}