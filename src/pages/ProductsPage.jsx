import React, { useEffect } from 'react'
import './ProductsPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/product/productSlice'
import ProductCard from '../components/Card/ProductCard'

const ProductsPage = () => {
  const products = useSelector(store => store.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])
  return (
    <div>
      <h1>List of Products</h1>
      {products.loading && <h1>Loading...</h1>}
      {!products.loading && products.error ? <h1>Error: {products.error} </h1> : null}
      {!products.loading && products.products.length ? (
        <div className='products-container'>
          {products.products.map((product) => (
            <ProductCard 
              key={product.id}
              image={product.image} 
              title={product.title} 
              category={product.category}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default ProductsPage