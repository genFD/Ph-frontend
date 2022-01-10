import React, { useState } from 'react';
import { FaShoppingCart, FaUserAstronaut, FaHeadphones } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './homePage.css';

const HomePage = () => {
  return (
    <div className='container'>
      <Navbar />
      <ProductsList />
    </div>
  );
};

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav id='nav'>
      <span>
        <Link to='/'>
          <FaHeadphones
            size={30}
            style={{
              color: '#64ffda',
            }}
          />
        </Link>
      </span>
      <ul className={openNav ? 'active' : null}>
        <button
          className='icon'
          id='toggle'
          onClick={() => setOpenNav(!openNav)}>
          <div className='line line1'></div>
          <div className='line line2'></div>
        </button>
        <div>
          <li>
            <Link to='/'>
              <FaShoppingCart
                size={18}
                style={{
                  color: '#64ffda',
                }}
              />
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <FaUserAstronaut
                size={18}
                style={{
                  color: 'red',
                }}
              />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

const ProductsList = () => {
  return <div>ProductsList</div>;
};

export default HomePage;
