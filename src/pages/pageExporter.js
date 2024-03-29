import { lazy } from 'react';

// ======== Pages && Components ==========
import Home from './home/Home';

//  ====== Lazy Loading Components ==========
let About = lazy(() => import('./about/About'));
let Products = lazy(() => import('./products/Products'));

export { Home, About, Products };
