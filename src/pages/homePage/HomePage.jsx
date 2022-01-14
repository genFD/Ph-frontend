import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart, FaUserAstronaut, FaHeadphones } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { listProducts } from '../../actions/productActions';
import './homePage.css';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <Navbar />
      <ProductsList />
      <Footer />
    </div>
  );
};

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className='nav'>
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
            <Link to='/cart'>
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
                  color: '#64ffda',
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
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1 className='product-title'>Featured products</h1>
      <span className='product-line'></span>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className='grid'>
          {products.map(({ pName, image, price, _id }) => {
            return (
              <Card
                key={_id}
                pName={pName}
                image={image}
                price={price}
                id={_id}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

const Card = ({ pName, image, price, id }) => {
  return (
    <div className='card-container'>
      <div className='card-img-container'>
        <img src={image} alt='' />
      </div>
      <div className='card-content-container'>
        <h3>{pName}</h3>
        <h2 className='card-price'>
          ${price}
          <div className='card-btn-container'>
            <Link to={`/products/${id}`}>
              <button className='card-btn'>More details</button>
              {/* <Button>Buy now</Button> */}
            </Link>
          </div>
        </h2>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='footer'>
      <p>Copyright &copy; Premium Headphones</p>
    </footer>
  );
};

export default HomePage;
