import React from 'react';
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <>
    <ul className='flex items-start justify-start gap-5 p-5 bg-gray-500 '>
      <li> <Link to="/home">Home</Link ></li>
      <li> <Link to="/traditional-super-heroes">Traditional Super Heroes</Link ></li>
      <li> <Link to="/rq-super-heroes">RQ Super Heros</Link ></li>
      <li><Link to='/rq-parallel'> Parallel Query Page</Link></li>
      <li><Link to='/rq-dynamic'> Dynamic Parallel Queries</Link></li>
      <li><Link to='/dependent-queries'> Dependent Queries</Link></li>
      <li><Link to='/paginate-queries'> Paginate Queries</Link></li>
      <li><Link to='/infinite-queries'> Infinite Queries</Link></li>



    </ul>
    </>
  );
}

export default Menu;