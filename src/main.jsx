import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PageError from './Pages/PageError'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'

import './index.css'
import Root from './Root'
import Surahs from './Pages/Surahs'
import axios from 'axios'
import DoaHarian from './Pages/DoaHarian'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root/>,
    errorElement : <PageError/>,
    children : [
      {
        path : '/',
        element : <App/>,
      },
      {
        path : '/surah/:nomor',
        element : <Surahs/>,
        loader : async function({params}){
          const data = await axios.get('https://equran.id/api/v2/surat/'+params.nomor).then(res=>res.data.data);
          return data;
        },
      },
      {
        path : '/doa-harian',
        element : <DoaHarian/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
