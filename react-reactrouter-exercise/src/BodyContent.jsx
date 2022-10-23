import React, { useEffect, useState } from "react";
import { getListUserAxios } from "./configApi";
import "./Header.css";

export default function BodyContent() {
  const [data, setData] = useState([]);
  const listData = data.articles;
  const [readMore, setIsReadMore] = useState(false);
  const handleLess = () => {
    setIsReadMore(false);
  };
  const handleMore = () => {
    setIsReadMore(true);
  };

  useEffect(() => {
    getListUserAxios().then((result) => {
      setData((pre) => (pre = result));
    });
  }, []);

  // class component shouldComponentUpdate =>

  return (
    <div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div>
              <div className="feed-toggle global-feed">
                <a href="#" className="nav-link active">
                  GlobalFeed
                </a>
              </div>
            </div>
            <hr />
            {listData.map((el, index) => (
              <div className="article-preview" key={index}>
                <div className=" container-fluid infor-article">
                  <div className="row">
                    <div className="col-sm-1">
                      <img
                        src={el?.author?.image}
                        alt="#"
                        className="image-infor"
                      />
                    </div>
                    <div className="col-sm-8 infor-sender">
                      <h5>{el?.author?.username}</h5>
                      <h6>{el?.createdAt}</h6>
                    </div>
                    <div className="col-sm-3 favoritescount">
                      <button type="button" className="btn btn-secondary">
                        {el?.favoritesCount}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="container-fluid preview">
                  <p className="content redless" style={{display : readMore ? "block" : "none"}}>
                    <h2> {el?.title}</h2>
                    <p>{el?.body}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleLess()}
                    >
                      ReadLess
                    </button>
                  </p>
                  <p className="readmore" style={{display : readMore ? "none" : "block"}}>
                    <h2>
                      {el?.title.slice(0, 100)}... 
                   
                    <button
                        type="button"
                        onClick={() => handleMore()}
                        className="btn btn-primary"
                      >
                        ReadMore 
                      </button>
                    </h2>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-3">
            <div className="slide-bar">
              <p>Popular Tags</p>
              <div className="tag-list">
                <a href="#"> implemntations</a>
                <a href="#"> welcome</a>
                <a href="#"> introduction</a>
                <a href="#"> ipsum</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
