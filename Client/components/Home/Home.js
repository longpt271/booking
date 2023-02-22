import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from 'store/home';

import './home.css';
import SearchBar from './SearchBar/SearchBar';
import City from './City/City';
import Type from './Type/Type';
import Hotel from './Hotel/Hotel';
import LoadingSpinner from 'components/UI/LoadingSpinner/LoadingSpinner';
import ApiContext from 'context/ApiContext';

const Home = () => {
  const apiCtx = useContext(ApiContext);
  const urlFetch = apiCtx.requests.getHomeData;

  // sử dụng redux lưu state home data
  const dispatch = useDispatch();
  const dataFetch = useSelector(state => state.home.data);
  const isLoading = useSelector(state => state.home.isLoading);
  const error = useSelector(state => state.home.error);

  // fetch data home
  useEffect(() => {
    // get data
    if (dataFetch.length === 0) {
      dispatch(homeActions.setLoading(true));
    }

    dispatch(homeActions.setError(null));
    fetch(urlFetch)
      .then(res => {
        if (!res.ok) {
          dispatch(homeActions.setError(true));
        }
        dispatch(homeActions.setLoading(false));
        return res.json();
      })
      .then(data => {
        dispatch(homeActions.setData(data));
      })
      .catch(err => {
        dispatch(homeActions.setError(err.message));
      });
  }, [dataFetch.length, urlFetch, dispatch]);

  return (
    <section id="home">
      <div className="container">
        <SearchBar />
        {isLoading && (
          <div className="centered">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && (
          <>
            <div className="isMobileScreen">
              <City data={dataFetch.listCity || []} />

              <h4>Browse by property type</h4>
              <div className="hr"></div>
              <Type data={dataFetch.listType || []} />
            </div>
            <h4>Homes guests love</h4>
            <div className="hr"></div>
            <Hotel data={dataFetch.topRating || []} />
          </>
        )}
        {!isLoading && error && (
          <p className="wrap-trans centered">Failed to Fetch!</p>
        )}
      </div>
    </section>
  );
};

export default Home;
