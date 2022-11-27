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

const addProductHandler = async (productName, productPrice) =>{
	try{
		const newProduct = {
			title: productName,
			price: +productPrice
			};
			let hasError = false;
			const response = await fetch('http://localhost:500/product', {
				method: 'POST',
				body: JSON.stringify(newProduct),
				headers: {
					'Content-Type' : 'application/json'
				}
			});
			if(!response.ok){
				hasError = true;
			}
			const responseData = await response.json();
			if (hasError){
				throw new Error(responseData.messasge);
			}
			setLoadedProducts(prevProducts =>{
				return prevProducts.concat({
					...newProduct,
					id: responseDatta.product.id
				});
			});
		} catch (error){
			alert(error.message || 'Something went wrong!');
		}
	};

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
