import React from "react";
import "./exploreButton.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";

const ExploreButton = () => {
  const handleClick = () => {
    // Make request to News API
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?" +
          "sources=bbc-news&" +
          "apiKey=1f2502a5d9da407388d97a0f40a4db51"
      )
      .then((response) => {
        // Get the first 5 articles from the response
        const articles = response.data.articles.slice(0, 5);

        // Create an HTML string with the articles and stylesheet
        const html = `
              <html>
                <head>
                  <title>Top 5 News Articles from BBC</title>
                  <style>
                    body {
                      font-family: 'Helvetica Neue', sans-serif;
                    }
                    .article-card {
                      border-radius: 10px;
                      padding: 10px;
                      margin-bottom: 10px;
                      background-color: #f7f7f7;
                      cursor: pointer;
                    }
                    .article-card:hover {
                      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
                    }
                    .article-title {
                      font-size: 18px;
                      margin: 0;
                    }
                    .article-image {
                      max-width: 100%;
                      height: auto;
                      margin-bottom: 10px;
                    }
                  </style>
                </head>
                <body>
                  ${articles
                    .map(
                      (article) => `
                      <div class="article-card">
                        <h2 class="article-title">${article.title}</h2>
                        <img src="${article.urlToImage}" alt="${article.title}" class="article-image">
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                      </div>
                    `
                    )
                    .join("")}
                </body>
              </html>
            `;

        // Open new window with the articles
        const newWindow = window.open("", "_blank", "width=600,height=600");
        newWindow.document.write(html);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="button-container">
      <button className="bottom-center-button" onClick={handleClick}>
        <p style={{ display: "flex", alignItems: "center" }}>
          <SearchOutlinedIcon />
          Explore
        </p>
      </button>
    </div>
  );
};

export default ExploreButton;
