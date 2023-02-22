import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import './HotelItem.css';
const HotelItem = props => {
  // console.log(props.image);

  // hàm bắt error từ img, nếu link ảnh đã có lỗi
  const replaceImage = err => {
    // set lại ảnh mặc định
    console.log(
      `lỗi link src ${err.target.src} của hotel ${props.name} (Đã thay bằng ảnh mặc định)`
    );
    err.target.src = '/images/hotel_1.jpg';
  };

  return (
    <div className="col hotel-item">
      <Link to={`hotels/${props._id}`}>
        <img
          src={props.image}
          alt="Hotel"
          className="img-hotel"
          onError={replaceImage}
        />
      </Link>
      <div className="hotel-content">
        <Link to={`hotels/${props._id}`}>{props.name}</Link>
        <div>{props.city}</div>
        <div className="hotel-item-price">Starting from ${props.price}</div>
        <div className="hotel-item-rating">
          <span className="rate-point">{props.rate}</span>
          <StarRatings
            rating={props.rate}
            starDimension="20px"
            starSpacing="10px"
            numberOfStars={5}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
