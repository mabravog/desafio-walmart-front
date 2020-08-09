import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import getProductos from './Api.js';

function App() {
  let [search, setSearch] = useState('');
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedProducts = await getProductos(search);
        setProducts(fetchedProducts);
      } catch (error) { }
    };
    fetchData();
  }, [search]);

  const searchChangeHandler = useCallback((event) => {
    const { value } = event.target
    setSearch(value);
  }, []);

  const isPalindromo = () => {
    search = String(search);
    if (search.length < 3) { return false }
    const aux = search;
    const reversed = aux.split('').reverse().join('');
    return search === reversed;
  }

  const currencyFormat = (value) => {
    value = Number(value);
    value = isPalindromo() ? (value - (value * 0.5)) : value;
    const formatted = '$' + value.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return formatted;
  }
  
  return (
    <div className='App'>
      <header className='App-header'>
        <input type='text' value={search} onChange={searchChangeHandler} placeholder='Busqueda de productos...'></input>
      </header>
      <div className='productList'>
        {
          products.map((product) => {
            return <div className='product'>
              <img alt={ product.description } className="image" src={ 'http://' + product.image }></img>
              <div className="description">
                <h3>{ product.brand }</h3>
                <p>{ product.description }</p>
                <p>{ currencyFormat(product.price) }</p>
                <p>{ isPalindromo() ? 'Descuento: 50%' : '' }</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
  