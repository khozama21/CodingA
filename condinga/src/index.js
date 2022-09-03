import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from 'firebase/app';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer';
import { reduxFirestore ,getFirestore } from 'firebase/firestore';
import { reactReduxFirebase ,getFirebase } from 'react-redux-firebase';
// import fbconfig from './config/fbconfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    // reduxFirestore(fbconfig), 
    // reactReduxFirebase(fbconfig),

  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);
