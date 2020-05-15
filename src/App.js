import React from 'react';
import {Provider} from 'react-redux';
import './style/style.css';
import store from './components/redux/store';
import Main from './components/Main';


function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
