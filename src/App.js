import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ListOfGifs from './components/listofgif/ListOfGifs'
import {Route} from "wouter"
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';

export default function App() {
  
  return (
    <div className="app">
      <NavBar/>
      <section className='app-content'>
        <Route 
          component={ListOfGifs} 
          path='/gif/:keyword' 
        />
        <Route 
          component={Home} 
          path='/' 
        />
        <Route 
          component={Detail} 
          path='/detail' 
        />
      </section>
    </div>
  );
}
