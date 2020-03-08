import React from 'react';
import store from './Store'
import {Provider} from 'react-redux';
import Home from './screens/Home';

const App = () => { 
  return(
    <Provider store={store}>
       <Home/>
    </Provider>
  );
}

export default App;
