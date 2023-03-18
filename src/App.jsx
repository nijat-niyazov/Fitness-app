import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { AppLayout, ProductsLayout } from './layouts/layoutExporter';
import { About, Home, Products } from './pages/pageExporter';
import Product from './pages/products/Product';
import { productsLoader } from './router-loaders/routExporter';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="hakkimda/bazi/bilgiler" element={<About />} />

        <Route path="products" element={<ProductsLayout />}>
          <Route index loader={productsLoader} element={<Products />} />
          <Route path=":productName" element={<Product />} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <Suspense fallback={<p>loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
