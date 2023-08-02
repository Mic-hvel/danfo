import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import ErrorPage from "./error-page";

import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/vans/Vans';

import App from './App';
import Home from './pages/Home';
import VanDetail, {loader as VanDetailLoader} from './pages/vans/VanDetail';
import Layout from './component/Layout';
import HostLayout from './pages/Host/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostVans, {loader as HostVansLoader} from './pages/Host/HostVans';
import HostVanDetail, {loader as HostVanDetailLoader} from './pages/Host/HostVanDetail';
import NotFound from './pages/NotFound';
import { requireAuth } from './utils';
import Login, {action as loginAction, loader as loginLoader} from './pages/Login';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<App />}
      errorElement={<ErrorPage />}
    >

      <Route element={<Layout />}  errorElement={<ErrorPage />}>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='login' element={<Login />} loader={loginLoader} action={loginAction} />
        <Route path='vans' element={<Vans />} loader={vansLoader} />
        <Route path='vans/:id' element={<VanDetail loader={VanDetailLoader} />}/>

        <Route path='host' element={<HostLayout />} >
          <Route index element={<Dashboard />} loader={async () => await requireAuth()}/>
          <Route path='income' element={<Income />} loader={async () => await requireAuth()}/>
          <Route path='vans' element={<HostVans />}  loader={HostVansLoader} />
          <Route path='vans/:id' element={<HostVanDetail />}  loader={HostVanDetailLoader}/>
          <Route path='reviews' element={<Reviews />} loader={async () => await requireAuth()}/>
        </Route>

        <Route path='*' element={<NotFound />}/>
        
      </Route>
      
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

