import React, { useState, useEffect} from 'react';
import Header from './components/Header';
import NewProduct from './components/NewProduct';
import ProductList from './components/ProductList';


export default function App() {
	const [loadedProducts, setLoadedProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(()=>{
		const fetchProducts = async() =>{
			setIsLoading(true);
			const response = await fetch('http://localhost:5000/products');
			const responseData = await response.json();

			setLoadedProducts(responseData.products);
			setIsLoading(false);
		};
		fetchProducts();
	}, []);
  return (
	<React.Fragment>
		<Header />
			<main>
				<NewProduct onAddProduct={addProductHandler} />
				{isLoading && <p className='loader'>Loading...</p>}
				{!isLoading && <ProductList items={loadedProducts} />}
			</main>
		</React.Fragment>
  )
};
