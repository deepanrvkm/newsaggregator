import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getNewsData } from '../redux/newsDataSlice';
import Spinner from "../components/Spinner";
import Banner from '../assets/images/banner.jpg'
import NewsCard from '../components/NewsCard'

const News = () => {
  const [search, setSearch] = useState('all');

  const dispatch = useDispatch()
  const { data, error, loading } = useSelector(state => state.news)

  const searchNews = (e) => {
    e.preventDefault();
    dispatch(getNewsData({ search }))
  }

  useEffect(() => {
    dispatch(getNewsData({ search }))
  }, [search, dispatch]);

  return (
    <>
        <section className="content">
          <div className="banner-outer">
            <div className="banner-image">
              <img src={Banner} alt="" />
            </div>
            <div className="search-block">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="search-area">
                      <form onSubmit={searchNews}>
                        <input type="text" className="tex-box" placeholder="Search news..."
                          onChange={(e) => setSearch(e.target.value)} />
                        <button type="submit" className="search-btn" onClick={searchNews}>Search</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="listing-block-outer">
            <div className="container">
              <div className="row">
                  {loading ? <Spinner /> : <NewsCard data={data}/>}                  
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default News