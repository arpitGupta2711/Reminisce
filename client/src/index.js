import React from 'react'
import ReactDOM  from 'react-dom'
import { Provider } from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from "./reducers/index"
import { StyledEngineProvider } from '@mui/material/styles';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App'
import './index.css'
const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(

<Provider store ={store}>
      <StyledEngineProvider injectFirst>
        <GoogleOAuthProvider clientId='134178700502-58l78mm61a480rara8m8ufpngfu8qlik.apps.googleusercontent.com'>
        <App/>
        </GoogleOAuthProvider>
    
    </StyledEngineProvider>
    </Provider>
    ,document.getElementById('root'))
