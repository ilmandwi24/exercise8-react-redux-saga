import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Url from '@pages/Url';

const routes = [
  {
    path: '/',
    name: 'Url',
    protected: false,
    component: Url,
    // layout: MainLayout,
  },
  {
    path: '/home',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },

  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
