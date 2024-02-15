import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/router.tsx'
import { ThemeConfig } from './config/theme.config.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeConfig>
    <RouterProvider router={router} />
    </ThemeConfig>
  </React.StrictMode>,
)
