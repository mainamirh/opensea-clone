const header = () => {
  const placeholder = "Search items, collections, and accounts";

  return (
    <header className="header">
      <div className="left-section">
        <img
          className="opensea-logo"
          src="https://opensea.io/static/images/logos/opensea.svg"
        />
        <div className="title">OpenSea</div>
      </div>
      <div className="middle-section">
        <div className="material-symbols-rounded">search</div>
        <input className="search-bar" type="text" placeholder={placeholder} />
      </div>
      <div className="right-section-1">
        <button>Explore</button>
        <button>Stats</button>
        <button>Resources</button>
        <button>Create</button>
      </div>
      <div className="right-section-2">
        <div className="material-symbols-rounded">account_circle</div>
        <div className="material-symbols-outlined">account_balance_wallet</div>
      </div>
    </header>
  );
};

export default header;
