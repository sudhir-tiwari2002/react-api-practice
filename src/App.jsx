import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import {QueryClientProvider , QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

import Menu from './components/Menu';
import TraditonalSuperHeroes from './components/Traditonal-super-heroes';
import RqSuperHeroes from './components/Rq-super-heroes';
import NewSuperhero from './components/newSuperhero';
import ParallelQuerisPage from './components/ParallelQuerisPage';
import DynamicParallelQueries from './components/DynamicParallelQueries';

const queryClient = new QueryClient()

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
    <div className='m-0 p-0'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/traditional-super-heroes" element={<TraditonalSuperHeroes />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rq-super-heroes" element={<RqSuperHeroes />} />
          <Route path="/new-super-hero/:heroId" element={<NewSuperhero/>} />
          <Route path="/rq-parallel" element={<ParallelQuerisPage/>} />
          <Route path="/rq-dynamic" element={<DynamicParallelQueries 
           heroIds={[1,3]}
          />} />

        </Routes>
      </BrowserRouter>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-left'/>
      </QueryClientProvider>
  );
}

export default App;
