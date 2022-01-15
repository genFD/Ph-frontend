import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';

import {
  FaStar,
  FaShoppingCart,
  FaArrowCircleLeft,
  FaStarHalfAlt,
  FaRegStar,
  FaTimes,
} from 'react-icons/fa';
import './productdetails.css';
import { Navbar } from '../homePage/HomePage';
import { listProductDetails } from '../../actions/productActions';
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch]);

  const {
    description,
    pName,
    price,
    rating,
    numReviews,
    countInStock,
    imageDetails,
  } = product;
  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error='error'>{error}</Message>
      ) : (
        <main className='product-details-container'>
          <BackButton />
          <Image image={imageDetails} />
          <Info
            description={description}
            price={price}
            name={pName}
            rating={rating}
            numReviews={numReviews}
            countInStock={countInStock}
          />
        </main>
      )}
    </>
  );
};
export const BackButton = () => {
  return (
    <Link to='/'>
      <FaArrowCircleLeft
        size={25}
        style={{
          color: '#64ffda',
        }}
      />
    </Link>
  );
};
const Image = ({ image }) => {
  // const imgTest = products[0].imageDetails;
  return (
    <>
      <div className='product-details-img-container'>
        <div className='product-details-img'>
          <img src={image} alt='' />
        </div>
      </div>
    </>
  );
};

const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
      <span>{text && text}</span>Reviews
      <div className='stars'>
        <span>
          {value >= 1 ? (
            <FaStar />
          ) : value >= 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 2 ? (
            <FaStar />
          ) : value >= 1.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 3 ? (
            <FaStar />
          ) : value >= 2.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 4 ? (
            <FaStar />
          ) : value >= 3.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {value >= 5 ? (
            <FaStar />
          ) : value >= 4.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
      </div>
    </div>
  );
};
// const SideDrawer = () => {
//   return (
//     <div className='side-drawer show'>
//       <FaTimes className='close-btn' />
//       <div className='products-review-cart '>
//         <h1>el1</h1>
//         <h1>el1</h1>
//         <h1>el1</h1>
//         <h1>el1</h1>
//       </div>
//       <button className='product-details-btn buy-now'>Buy Now</button>
//     </div>
//   );
// };

const Info = ({
  name,
  description,
  price,
  rating,
  numReviews,
  countInStock,
}) => {
  const [qty, setQty] = useState(1);
  const params = useParams();
  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate(`/cart/${params.id}?qty=${qty}`);
  };
  return (
    <div className='product-details-info'>
      <h1 className='product-details-title'>{name}</h1>
      <span className='divider'></span>
      <div className='product-details-rating'>
        <Rating value={rating} text={`${numReviews}`} />
      </div>
      <p className='product-price'>${price}</p>
      <p>{description}.</p>
      <p>{countInStock > 0 ? 'In stock' : 'Out of Stock'}</p>
      {countInStock > 0 && (
        <select
          className='select'
          value={qty}
          onChange={(e) => setQty(e.target.value)}>
          {[...Array(countInStock).keys()].map((x) => {
            return (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            );
          })}
        </select>
      )}
      <button
        onClick={addToCartHandler}
        disabled={countInStock === 0}
        className={countInStock === 0 ? 'disabled' : 'product-details-btn'}>
        {countInStock === 0 ? 'out of stock' : 'Add to cart'}
        <FaShoppingCart />
      </button>
    </div>
  );
};

export default ProductDetailsPage;
