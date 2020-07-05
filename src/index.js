import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import './styles.css';
//
const Index = () => {
  return <div> <Header /> Welcome to React  </div>;
};
//
ReactDOM.render(<Index />, document.getElementById('root'));

