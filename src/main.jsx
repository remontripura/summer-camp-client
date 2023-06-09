import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <div className='max-w-7xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>,
      </QueryClientProvider>
    </div>
  </AuthProvider>
)
