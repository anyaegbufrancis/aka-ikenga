import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { createStore } from "redux"
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
//import reportWebVitals from './reportWebVitals'
import "./index.css";


const store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(
  <Provider store={store}>  
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>
  </Provider>,
   document.getElementById("root")
);

//reportWebVitals()

