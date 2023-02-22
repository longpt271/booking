import { useLocation } from 'react-router-dom';

import NavBar from './Navbar/Navbar';
import Slider from './slider/Slider';
import Footer from './Footer/Footer';
import PhoneRing from './PhoneRing/PhoneRing';

const Layout = props => {
  const location = useLocation();

  const currentPath = location.pathname;
  return (
    <>
      <NavBar />
      {currentPath === '/' && <Slider />}
      {props.children}
      <Footer />
      <PhoneRing />
    </>
  );
};

export default Layout;
