import React from 'react';
import logo from './logo.svg';
import './styles.css';
import Home from './components/home';
import Teamweights from './components/teamweights';
import WeightsMain from './components/weightsmain';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path='/teamweights' component={Teamweights}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
