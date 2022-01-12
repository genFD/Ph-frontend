import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaStar,
  FaShoppingCart,
  FaArrowCircleLeft,
  FaStarHalfAlt,
  FaRegStar,
} from 'react-icons/fa';
import products from '../../data/data';
import './productdetails.css';
import { Navbar } from '../homePage/HomePage';

const ProductDetailsPage = () => {
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find((p) => p._id === productId);
  const {
    imageDetails,
    description,
    pName,
    price,
    rating,
    numReviews,
    countInStock,
  } = product;
  return (
    <>
      <Navbar />
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
    </>
  );
};
const BackButton = () => {
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

const Info = ({
  name,
  description,
  price,
  rating,
  numReviews,
  countInStock,
}) => {
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
      <button
        disabled={countInStock === 0}
        className={countInStock === 0 ? 'disabled' : 'product-details-btn'}>
        {countInStock === 0 ? 'out of stock' : 'Add to cart'}
        <FaShoppingCart />
      </button>
    </div>
  );
};

export default ProductDetailsPage;
