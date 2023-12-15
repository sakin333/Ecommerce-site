import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
// import ProductsPage from './pages/ProductsPage'
import Navbar from './components/Navbar/Navbar'
import NewArrivalspage from './pages/NewArrivalspage'
import Contactpage from './pages/Contactpage'
import PageNotFound from './components/InvalidRoute/PageNotFound'

//Lazy Loading
const LazyProductPage = React.lazy(() => import('./pages/ProductsPage'))

const App = () => {
  return (
    <div className='main-container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route 
          path='/products' 
          element={
            <React.Suspense fallback='Loading...'>
                <LazyProductPage/>
            </React.Suspense>
          } 
        />
        <Route path='/newarrivals' element={<NewArrivalspage />} />
        <Route path='/contact' element={<Contactpage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App