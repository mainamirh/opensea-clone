import { useEffect } from "react";
import Toggle_button from "./ToggleButton";

const Header = ({ setDarkMode }) => {
  const placeholder = "Search items, collections, and accounts";

  useEffect(() => {
    const hero = document.querySelector(".hero-container");
    const header = document.querySelector(".header");
    const searchBar = document.querySelector(".middle-section");

    const options = {
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.classList.add("dynamic-header");
          searchBar.classList.add("middle-section-dynamic");
        } else {
          header.classList.remove("dynamic-header");
          searchBar.classList.remove("middle-section-dynamic");
        }
      });
    }, options);

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

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
              fontSize: "14px",
              marginLeft: "3px",
              fontWeight: "600",
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
            <div className="tooltip-item last night-mode">
              Night Mode
              <Toggle_button setDarkMode={setDarkMode} />
            </div>
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

export default Header;
