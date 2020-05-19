
import React from 'react'
import HomePage from '../page/HomePage'
import TravelPage from '../page/TravelPage'
import MenCollection from '../page/MenCollection';
import ProductDetailPage from '../page/ProductDetailPage';
const routes = [

    {
        path: "/",
        exact: true,
        main: () => <HomePage />,
    },
    {
        path: "/travel",
        exact: true,
        main: () => <TravelPage />,
    },
    {
        path: "/mencollection",
        exact: true,
        main: () => <MenCollection />,
    },
    {
        path: "/product",
        exact: true,
        main: () => <ProductDetailPage />,
    },
   
]

export default routes ;