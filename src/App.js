import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Redux/Modules/store';
import HomePage from './Pages/HomePage/homepage.component';
import UserDetail from './Pages/User/UserDetail.component';

function App() {
  return (
    <Provider store={store}>
      <Route exact path="/" component={HomePage}/>
      <Route path="/detail" component={UserDetail}/>
    </Provider>
  );
}

export default App;
