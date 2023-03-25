import React from "react";
import { useParams } from "react-router-dom";

const NewsPage = () => {
  const { title } = useParams();

  // Use the title to fetch the article details from your API or use the state passed from the ExploreButton component

  return (
    <div>
      <h2>{title}</h2>
      <p>Article details go here</p>
    </div>
  );
};

export default NewsPage;
