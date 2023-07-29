import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/styles'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./libs/store/index"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      components: {
        Container: {
          defaultProps: {
            sizes: {
              xs: 540,
              sm: 720,
              md: 960,
              lg: 1140,
              xl: 1320,
            },
          },
        },
      },
    }}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}></Route>
          </Routes></BrowserRouter>
      </Provider>
    </MantineProvider>
  </React.StrictMode>,
)
