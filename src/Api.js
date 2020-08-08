import axios from 'axios';

async function getProductos() {
    try {
        const response = await axios('http://localhost:5000/products', { method: 'GET' });
        const products = response.data.products;
        return products;
    } catch (error) {
        console.log("ERROR", error);
        throw new Error(error);
    }
}

export default getProductos;