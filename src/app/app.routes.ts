import { RouterConfig } from '@angular/router';
import { Home } from './home';
import { ComicsList } from './comics-list';
import { ComicsDetail } from './comics-detail';

export const routes: RouterConfig = [
  { path: '',      component: Home },
  { path: 'comics',  component: ComicsList },
  { path: 'comics/:id',  component: ComicsDetail }
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes = {
};

// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks = [
   // es6-promise-loader returns a function
];
