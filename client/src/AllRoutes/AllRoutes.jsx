import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../Components/Login'
import ProductList from '../Components/ProductList';
const AllRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    );
}

export default AllRoutes;