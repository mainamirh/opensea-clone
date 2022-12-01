const Hero = () => {
  const hardcode = {
    title: "Discover, collect, and sell extraordinary NFTs",
    description: "OpenSea is the world's first and largest NFT marketplace",
    nftOfDay:
      "https://i.seadn.io/gae/OtfG2tvOcqF-yCyJ85z04K8732j_Ks3jtSjOck6h0zxS_QcsPxxjzv2Q3kDAy1ksw8swdcbqYafRYkfmwVE3qEWDYt1DtOUedhVYcpE?auto=format&w=512",
    nftProfile:
      "https://i.seadn.io/gcs/files/7374bcc1521d964418b18c4478862686.jpg?auto=format&w=256",
    nftCollectionName: "KPR",
    nftOwner: "RoyalGalaxy",
  };
  return (
    <div className="hero-container">
      <div className="hero-image"> </div>

      <div className="hero">
        <div className="hero-title-container">
          <div className="title">{hardcode.title}</div>
          <div className="description">{hardcode.description}</div>
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
          <img className="nft-of-day" src={hardcode.nftOfDay} />
          <div className="nft-detail">
            <img className="nft-profile" src={hardcode.nftProfile} />
            <div className="nft-info">
              <div className="nft-name">{hardcode.nftCollectionName}</div>
              <div className="owner">{hardcode.nftOwner}</div>
            </div>
            <div className="material-symbols-outlined">info</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
