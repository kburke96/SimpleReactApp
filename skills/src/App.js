import React from 'react';
import './styles.css';
import Home from './components/home/home';
import Login from './components/login/login';
import TeamWeights from './components/teamweights/teamweights';
import {BrowserRouter, Route} from 'react-router-dom';
//
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/teamweights" component={TeamWeights}/>
        <Route path="/login" component={Login}/>
      </BrowserRouter>
    </div>
  );
}
//
export default App;
