import React, { useEffect, useState } from 'react';
import './App.css';
import getProductos from './Api.js';

function App() {
  let [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedProducts = await getProductos();
        setProducts(fetchedProducts);
      } catch (error) { }
    };
    fetchData();
  }, []);

  const currencyFormat = (value) => {
    const formatted = '$' + Number(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return formatted;
  }
  
  return (
    <div className='App'>
      <header className='App-header'>
        <input type='text' placeholder='Busqueda de productos...'></input>
      </header>
      <div className='productList'>
        {
          products.map((product) => {
            return <div className='product'>
              <img className="image" src={ 'http://' + product.image }></img>
              <div className="description">
                <h3>{ product.brand }</h3>
                <p>{ product.description }</p>
                <label>{ currencyFormat(product.price) }</label>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
  