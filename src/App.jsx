import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import Menu from './components/Menu';
import TraditonalSuperHeroes from './components/Traditonal-super-heroes';
import RqSuperHeroes from './components/Rq-super-heroes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='m-0 p-0'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/traditional-super-heroes" element={<TraditonalSuperHeroes />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rq-super-heroes" element={<RqSuperHeroes />} />
        </Routes>
      </BrowserRouter>
      </div>
   
  );
}

export default App;
