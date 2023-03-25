import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Chip } from "@mui/material";

const CategoryButton = () => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <h3 style={{ marginLeft: "10px" }}>Top Stories for you</h3>
      <br />
      <div className="wrapper">
        <Stack direction="row" spacing={1}>
          {categories.map((category, index) => (
            <Chip
              key={index}
              label={category}
              clickable
              color={
                selectedCategories.includes(category) ? "primary" : "default"
              }
              onClick={() => handleClick(category)}
              variant={
                selectedCategories.includes(category) ? "filled" : "outlined"
              }
            />
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default CategoryButton;
