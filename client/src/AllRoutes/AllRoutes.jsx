import React from 'react'
import {Routes,Route} from "react-router-dom"
import ProductList from '../Components/ProductList';
const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    );
}

export default AllRoutes;