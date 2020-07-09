import React from 'react';
import './styles.css';
import Home from './components/home/home';
import Login from './components/login/login';
import TeamWeights from './components/teamweights/teamweights';
import EnterWeight from './components/enterweight/enterweight';
import {BrowserRouter, Route} from 'react-router-dom';
//
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/teamweights" component={TeamWeights}/>
        <Route path="/login" component={Login}/>
        <Route path="/enterweight" component={EnterWeight} />
      </BrowserRouter>
    </div>
  );
}
//
export default App;
