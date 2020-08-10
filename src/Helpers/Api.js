import axios from 'axios';

async function getProductos(search = '') {
    try {
        const response = await axios(`https://desafio-walmart-back.herokuapp.com/products/${search}`, { method: 'GET' });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

export default getProductos;