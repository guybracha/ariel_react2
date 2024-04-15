import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Header from './comp/Header';
import Vip from './pages/Vip';
import VipInfo from './pages/VipInfo';
import Counter from './pages/Counter';
import { AppContext } from './context/Context';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(77);


  return (
    <BrowserRouter>
    <AppContext.Provider value={{}}>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/vip' element={<Vip/>}/>
          <Route path='/vip/:rank' element={<VipInfo/>}/>
          <Route path='/counter' element={<Counter/>}/>
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
