import React from 'react';
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <>
    <ul className='flex items-start justify-start gap-5 p-5 bg-gray-500 '>
      <li> <Link to="/home">Home</Link ></li>
      <li> <Link to="/traditional-super-heroes">Traditional Super Heroes</Link ></li>
      <li> <Link to="/rq-super-heroes">RQ Super Heros</Link ></li>


    </ul>
    </>
  );
}

export default Menu;