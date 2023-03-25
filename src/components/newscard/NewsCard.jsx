import React from "react";
import axios from "axios";
import "./newsCard.css";
import { useEffect, useState } from "react";

const NewsCard = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const url = "https://newsapi.org/v2/top-headlines";
    const sources = "bbc-news";
    const apiKey = "1f2502a5d9da407388d97a0f40a4db51";

    axios
      .get(`${url}?sources=${sources}&apiKey=${apiKey}`)
      .then((response) => {
        setNewsData(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const timeAgo = (prevDate) => {
    console.log("timeAgo", prevDate);
    const diff = Number(new Date()) - Number(new Date(prevDate));
    console.log(diff);
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
      case diff < minute:
        const seconds = Math.round(diff / 1000);
        return `${seconds} ${seconds > 1 ? "seconds" : "second"} ago`;
      case diff < hour:
        return Math.round(diff / minute) + " minutes ago";
      case diff < day:
        return Math.round(diff / hour) + " hours ago";
      case diff < month:
        return Math.round(diff / day) + " days ago";
      case diff < year:
        return Math.round(diff / month) + " months ago";
      case diff > year:
        return Math.round(diff / year) + " years ago";
      default:
        return "";
    }
  };

  return (
    <div className="wrapper">
      {newsData.map((article, index) => (
        <div
          className="item"
          key={index}
          style={{ backgroundImage: `url(${article.urlToImage})` }}
        >
          <div className="newsInfo">
            <div className="text">
              <span
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "bolder",
                }}
              >
                {timeAgo(article.publishedAt)}
              </span>
              <br />
              <span style={{ color: "white" }}>{article.title}</span>
              <br />
              <span>{article.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
