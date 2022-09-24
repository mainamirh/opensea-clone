const Footer = () => {
  return (
    <div className="site-footer">
      <div className="section-one">
        <div className="stay-in-loop">
          <div className="title">Stay in the loop</div>
          <div className="description">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </div>
          <div className="subscription">
            <input
              type="text"
              className="email"
              placeholder="Your email address"
            />
            <button className="sign-up">Sign up</button>
          </div>
        </div>
        <div className="join-community">
          <div className="title">Join the community</div>
          <div className="social">
            <a href="" className="twitter">
              <img src="/icons/twitter.svg" />
            </a>
            <a href="" className="instagram">
              <img src="/icons/instagram.svg" />
            </a>
            <a href="" className="discord">
              <img src="/icons/discord.svg" />
            </a>
            <a href="" className="reddit">
              <img src="/icons/reddit.svg" />
            </a>
            <a href="" className="youtube">
              <img src="/icons/youtube.svg" />
            </a>
            <a href="" className="tik-tok">
              <img src="/icons/tiktok.svg" />
            </a>
            <a href="" className="newsletter">
              <img src="/icons/envelope.svg" />
            </a>
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="quarter">
          <div className="opensea-logo">
            <img src="https://opensea.io/static/images/logos/opensea-white.svg" />
          </div>
          <a
            href="https://opensea.io/"
            className="title"
            target="_blank"
            rel="noreferrer"
          >
            Opensea
          </a>
          <div className="description">
            The world&apos;s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </div>
        </div>
        <div className="three-quarters">
          <div className="marketplace">
            <div className="footer-header">Marketplace</div>
            <div className="link-list">
              <a href="" target="_blank" rel="noreferrer">
                All NFTs
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Solana NFTs
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Art
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Collectibles
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Domain Names
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Music
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Photography
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Sports
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Trading Cards
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Utility
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Virtual Worlds
              </a>
            </div>
          </div>
          <div className="my-account">
            <div className="footer-header">My Account</div>
            <div className="link-list">
              <a href="" target="_blank" rel="noreferrer">
                Profile
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Favorites
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Watchlist
              </a>
              <a href="" target="_blank" rel="noreferrer">
                My Collections
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Settings
              </a>
            </div>
            <div className="footer-header-stats">Stats</div>
            <div className="link-list">
              <a href="" target="_blank" rel="noreferrer">
                Rankings
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Activity
              </a>
            </div>
          </div>
          <div className="resources">
            <div className="footer-header">Resources</div>
            <div className="link-list">
              <a href="" target="_blank" rel="noreferrer">
                Learn
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Help Center
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Platform Status
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Partners
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Taxes
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Blog
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Docs
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Newsletter
              </a>
            </div>
          </div>
          <div className="company">
            <div className="footer-header">Company</div>
            <div className="link-list">
              <a href="" target="_blank" rel="noreferrer">
                About
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Careers
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Ventures
              </a>
              <a href="" target="_blank" rel="noreferrer">
                Grants
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-three">
        <div className="">&copy; 2018 - 2022 Ozone Networks, Inc</div>
        <div className="right-section">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
