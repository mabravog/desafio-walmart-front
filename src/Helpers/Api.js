import axios from 'axios';

async function getProductos(search = '') {
    try {
        const response = await axios(`http://localhost:7000/products/${search}`, { method: 'GET' });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

export default getProductos;