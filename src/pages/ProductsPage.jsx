import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/product/productSlice'

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
        <>
          {products.products.map((product) => (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
            </div>
          ))}
        </>
      ) : null}
    </div>
  )
}

export default ProductsPage