const hero = () => {
  const title = "Discover, collect, and sell extraordinary NFTs";
  const description =
    "OpenSea is the world's first and largest NFT marketplace";

  return (
    <div className="hero-container">
      <div className="hero-image"> </div>

      <div className="hero">
        <div className="hero-title-container">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="button-container">
            <button className="explore-button">Explore</button>
            <button className="create-button">Create</button>
          </div>
          <div className="learn-more">
            <div className="material-symbols-outlined">play_circle</div>
            <div>Learn more about OpenSea</div>
          </div>
        </div>

        <div className="nft-container">
          <img
            className="nft-of-day"
            src="https://img.seadn.io/files/652b5d515f3cf7842caef2f685fea66a.png?auto=format&fit=max&w=384"
          />
          <div className="nft-detail">
            <img
              className="nft-profile"
              src="https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s168"
            />
            <div className="nft-info">
              <div className="nft-name">Pudgy Penguin</div>
              <div className="owner">DarrenSRS</div>
            </div>
            <div className="material-symbols-outlined">info</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
