import { useEffect, useState } from "react";

const TopCollections = ({ NFT_Collections }) => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const renderedCollections = NFT_Collections.map((collection, i) => {
      return (
        <div className="collection-container" key={i}>
          <div className="number">{i + 1}</div>
          <div className="image-container">
            <img src={collection.image} className="collection-image" />
            {collection.verified ? (
              <img className="verified-icon" src="/icons/verified.svg" />
            ) : undefined}
          </div>
          <div className="collection-details">
            <div className="name">{collection.name}</div>
            <div className="floor-price">
              <p className="phrase-one">Floor price:</p>
              <img src={collection.currency} className="currency" />
              <p className="phrase-two">{collection.floorPrice}</p>
            </div>
          </div>
          <div className="collection-trade-info">
            <div
              className="volume-changes"
              style={
                collection.volumeChanges > 0
                  ? { color: "rgb(52, 199, 123)" }
                  : { color: "rgb(235, 87, 87)" }
              }
            >
              {collection.volumeChanges}%
            </div>
            <div className="volume">
              <img src={collection.currency} className="currency" />
              {collection.volume}
            </div>
          </div>
        </div>
      );
    });

    let collectionGrid = [];
    let column;

    for (let i = 0; i < 3; i++) {
      column = [];
      for (let j = 0; j < 5; j++) {
        column.push(renderedCollections[i * 5 + j]);
      }
      collectionGrid.push(column);
    }

    setCollections(collectionGrid);
  }, []);

  return (
    <div className="top-collections-container">
      <div className="title">
        Top collections over{" "}
        <span style={{ color: "rgb(32, 129, 226)" }}>last 24 hours</span>
      </div>
      <div className="collections-grid">
        <div className="column">{collections[0]}</div>
        <div className="column">{collections[1]}</div>
        <div className="column">{collections[2]}</div>
      </div>
      <button className="go-ranking">Go to Rankings</button>
    </div>
  );
};

export default TopCollections;
