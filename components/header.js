const header = () => {
  const placeholder = "Search items, collections, and accounts";

  return (
    <header className="header">
      <a href="https://opensea.io/" target="_blank" className="left-section">
        <img
          className="opensea-logo"
          src="https://opensea.io/static/images/logos/opensea.svg"
        />
        <div className="title">
          OpenSea
          <span
            style={{
              fontSize: "13px",
              marginLeft: "3px",
              fontWeight: "500",
              color: "rgb(32, 129, 226)",
            }}
          >
            Clone
          </span>
        </div>
      </a>
      <div className="middle-section">
        <div className="material-symbols-rounded">search</div>
        <input className="search-bar" type="text" placeholder={placeholder} />
      </div>
      <div className="right-section-1">
        <button className="explore">
          Explore
          <div className="tooltip">
            <a className="tooltip-item first" href="#">
              <img src="https://opensea.io/static/images/icons/allnfts-light.svg" />
              <div className="name">All NFTs</div>
            </a>
            <a className="tooltip-item" href="#">
              <img src="https://opensea.io/static/images/icons/solana-light.svg" />
              <div className="name">Solana NFTs</div>
            </a>
            <a className="tooltip-item" href="#">
              <img src="https://opensea.io/static/images/icons/art-light.svg" />
              <div className="name">Art</div>
            </a>
            <a className="tooltip-item" href="#">
              <img src="https://opensea.io/static/images/icons/collectibles-light.svg" />
              <div className="name">Collectibles</div>
            </a>
            <a className="tooltip-item" href="#">
              <img src="https://opensea.io/static/images/icons/domain-names-light.svg" />
              <div className="name">Domain Names</div>
            </a>
            <a className="tooltip-item" href="#">
              <img src="https://opensea.io/static/images/icons/music-light.svg" />
              <div className="name">Music</div>
            </a>
            <a className="tooltip-item" href="#">
              <img src="https://opensea.io/static/images/icons/photography-category-light.svg" />
              <div className="name">Photography</div>
            </a>
            <a className="tooltip-item" href="#">
              <img src="https://opensea.io/static/images/icons/sports-light.svg" />
              <div className="name">Sports</div>
            </a>
            <a className="tooltip-item" href="#">
              <img src="https://opensea.io/static/images/icons/trading-cards-light.svg" />
              <div className="name">Trading Cards</div>
            </a>
            <a className="tooltip-item" href="#">
              <img src="https://opensea.io/static/images/icons/utility-light.svg" />
              <div className="name">Utility</div>
            </a>
            <a className="tooltip-item last" href="#">
              <img src="https://opensea.io/static/images/icons/virtual-worlds-light.svg" />
              <div className="name">Virtual Worlds</div>
            </a>
          </div>
        </button>
        <button className="stats">
          Stats
          <div className="tooltip">
            <a className="tooltip-item first" href="#">
              Rankings
            </a>
            <a className="tooltip-item last" href="#">
              Activity
            </a>
          </div>
        </button>
        <button className="resources">
          Resources
          <div className="tooltip">
            <a className="tooltip-item first" href="#">
              Learn
            </a>
            <a className="tooltip-item" href="#">
              Help Center
            </a>
            <a className="tooltip-item" href="#">
              Platform Status
            </a>
            <a className="tooltip-item" href="#">
              Partners
            </a>
            <a className="tooltip-item" href="#">
              Taxes
            </a>
            <a className="tooltip-item" href="#">
              Blog
            </a>
            <a className="tooltip-item" href="#">
              Docs
            </a>
            <a className="tooltip-item last" href="#">
              Newsletter
            </a>
          </div>
        </button>
        <button>Create</button>
      </div>
      <div className="right-section-2">
        <div className="account">
          <div className="material-symbols-rounded">account_circle</div>
          <div className="tooltip">
            <a className="tooltip-item first" href="#">
              Profile
            </a>
            <a className="tooltip-item" href="#">
              Favorites
            </a>
            <a className="tooltip-item" href="#">
              Watchlist
            </a>
            <a className="tooltip-item" href="#">
              My Collections
            </a>
            <a className="tooltip-item" href="#">
              Settings
            </a>
            <a className="tooltip-item last" href="#">
              Night Mode
            </a>
          </div>
        </div>
        <div className="wallet">
          <div className="material-symbols-outlined">
            account_balance_wallet
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
