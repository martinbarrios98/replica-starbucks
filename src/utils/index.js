export const formatDate = fecha => {

    const nueva_fecha = new Date(fecha) || new Date();

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return nueva_fecha.toLocaleDateString('es-ES', opciones);

}

export const getDateFormat = () => {

    const nueva_fecha = new Date().toLocaleDateString('es-ES').split("T")[0];

    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return nueva_fecha;

}

export const getHourFormat = () => {
    return new Date().toLocaleTimeString()
}