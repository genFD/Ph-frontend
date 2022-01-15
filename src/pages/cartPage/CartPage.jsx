import React, { useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Message/Message';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { Navbar } from '../homePage/HomePage';
import './cartPage.css';
import { FaTrash } from 'react-icons/fa';
import { BackButton } from '../productDetailsPage/ProductDetailsPage';

const CartPage = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const productId = params['*'];

  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkOutHandler = () => {
    navigate('/login?redirect=shipping');
  };
  return (
    <>
      <Navbar />

      <div className='cart-page-container'>
        <BackButton />
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <Message success='success'>
            <span>Empty Cart</span>
            <Link
              style={{
                textDecoration: 'underline',
                color: '#0a192f',
              }}
              to='/'>
              Go Home
            </Link>
          </Message>
        ) : (
          <div className='cart-items'>
            <>
              {cartItems.map((item) => {
                return (
                  <div key={item.product} className='cart-item'>
                    <img src={item.image} alt='' />
                    <div>
                      <Link
                        style={{
                          textDecoration: 'none',
                          color: '#64ffda',
                        }}
                        to={`/product/${item.product}`}>
                        <h4>{item.name}</h4>
                      </Link>
                      <p>${item.price}</p>
                      <button
                        className='delete-btn'
                        onClick={() => removeFromCartHandler(item.product)}>
                        <FaTrash />
                      </button>
                    </div>
                    <select
                      className='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }>
                      {[...Array(item.countInStock).keys()].map((x) => {
                        return (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                );
              })}
              <footer>
                <hr />
                <div className='cart-total'>
                  <h4>
                    total
                    <span>
                      $
                      {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)}
                    </span>
                  </h4>
                </div>
                <button
                  disabled={cartItems.length === 0}
                  className='checkout-btn'
                  onClick={checkOutHandler}>
                  checkout
                </button>
              </footer>
            </>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
