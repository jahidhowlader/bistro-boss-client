import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes/Routes'
import { HelmetProvider } from 'react-helmet-async';

import './index.css'
import AuthProvider from './provider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  </HelmetProvider>
)
