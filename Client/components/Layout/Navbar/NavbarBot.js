import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './NavbarBot.css';
import { AuthContext } from 'context/AuthContext';

// import confirm modal
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { toastActions } from 'store/toast';

const NavbarBot = props => {
  const navigate = useNavigate();

  // lấy ra user từ ctx
  const authCtx = useContext(AuthContext);

  const isAuth = Boolean(authCtx.user);
  // console.log(isAuth);

  // Dùng useDispatch() cập nhật state redux
  const dispatch = useDispatch();

  const handleLogout = () => {
    confirmAlert({
      message: 'Confirm to logout',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            authCtx.dispatch({ type: 'LOGOUT' });
            // navigate('/auth');

            // alert
            dispatch(toastActions.SHOW_SUCCESS('Logout!'));
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-1 px-lg-5 wow fadeIn navbarBot"
      data-wow-delay="0.1s"
    >
      <Link to="/" className="mainLogo">
        <span>Banoididulichthoii</span>
        <small>Travel agent</small>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        {!isAuth && (
          <div className="navbar-nav ms-auto p-4 p-lg-0 navbar-wrap-btn">
            <button
              className="nav-item nav-link"
              onClick={() => navigate('/auth/register')}
            >
              Sign Up
            </button>
            <button
              className="nav-item nav-link"
              onClick={() => navigate('/auth')}
            >
              Login
            </button>
          </div>
        )}
        {isAuth && (
          <div className="navbar-nav ms-auto p-4 p-lg-0 navbar-wrap-btn">
            <Link to="/user-info" className="nav-item nav-link">
              <span className="userNavHead">{authCtx.user.email}</span>
            </Link>
            <button
              className="nav-item nav-link"
              onClick={() => navigate('/transactions')}
            >
              Transactions
            </button>
            <button className="nav-item nav-link" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarBot;
