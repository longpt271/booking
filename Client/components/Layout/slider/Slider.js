import { Link } from 'react-scroll';
import './styles/main.css';
import './styles/responsive.css';

//làm theo mẫu website https://www.designzillas.com/

function Slider(props) {
  return (
    <section id="slider">
      <div className="dinosaur">
        <div className="slider__background">
          <div className="slider__background__Leaf1"></div>
          <div className="slider__background__Leaf2"></div>
          <div className="slider__background__dinosaur-child">
            <div className="slider__background__dinosaur-child__text">
              Đi thôi nào
              {/* <i className="fas fa-grin-hearts"></i> */}
            </div>
            <div className="slider__background__dinosaur-child__eye-left"></div>
            <div className="slider__background__dinosaur-child__eye-right"></div>
          </div>
          <div className="slider__background__dinosaur-child1">
            <div className="slider__background__dinosaur-child__text">
              {/* <i className="fas fa-angry"></i> */}
              Chờ tôi với!!!
            </div>
            <div className="slider__background__dinosaur-child__eye-left"></div>
            <div className="slider__background__dinosaur-child__eye-right"></div>
          </div>
          <div className="slider__background__dinosaur-child2">
            <div className="slider__background__dinosaur-child__eye-left"></div>
            <div className="slider__background__dinosaur-child__eye-right"></div>
          </div>
          <div className="slider__background__bottom"></div>
          <div className="slider__background__content">
            <p className="slider__background__content__description">
              Du lịch Nội địa & Quốc tế
            </p>

            <h1 className="slider__background__content__title-main">
              Back to nature,
              <br /> the way it was!
            </h1>
            <div className="slider__wrap__btn">
              <Link
                to="search-bar"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="btn-private slider__btn__book">
                  Book Now
                </button>
              </Link>
              <Link
                to="footer-phone-subscribe"
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
              >
                <button className="btn-private slider__btn__contact">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Slider.propTypes = {};

export default Slider;
