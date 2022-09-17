import { useEffect, useState } from "react";

const browse = ({ categories }) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const renderedCategories = categories.map((category, i) => {
      return (
        <div className="category-container" key={i}>
          <img src={category.image} className="category-image" />
          <div className="footer">
            <div className="category-name">{category.name}</div>
          </div>
        </div>
      );
    });

    setCollections(renderedCategories);
  }, []);

  return (
    <div className="categories-section">
      <div className="categories-title">Browse by category</div>
      <div className="categories-grid">{collections}</div>
    </div>
  );
};

export default browse;
