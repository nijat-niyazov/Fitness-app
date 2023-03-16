import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { About, Home } from './pages/exporter';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/hakkimda/bazi/bilgiler" element={<About />} />
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
