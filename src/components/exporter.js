import { lazy } from 'react';

import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import ProgressBar from './progressBar/ProgressBar';
import ScrollTop from './scroll-top/ScrollTop';

//  =========== Lazy Components =================

let BreadCrumbs = lazy(() => import('./breadCrumbs/BreadCrumbs'));
let FadingUp = lazy(() => import('./fadingUp/FadingUp'));

export { BreadCrumbs, Navbar, Footer, ScrollTop, ProgressBar, FadingUp };
