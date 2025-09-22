import React from 'react';

const HeaderSEO = () => {
  return (
    <section className="seo-header-section" style={{
      position: 'absolute',
      top: '-9999px',
      left: '-9999px',
      width: '1px',
      height: '1px',
      overflow: 'hidden',
      visibility: 'hidden',
      opacity: 0,
      zIndex: -1
    }}>
      <div className="seo-content">
        <h1>CarGameOnline - Free Online Racing Car Game</h1>

        <h2>3D Car Game - Racing and Drift Multiplayer</h2>

        <p>
          Welcome to CarGameOnline, the free online racing car game that offers you
          an exceptional driving experience. Dive into the world of automobile racing
          with stunning 3D graphics and realistic game mechanics.
        </p>

        <h3>Racing Game Features</h3>
        <ul>
          <li>Free racing car game</li>
          <li>Online multiplayer mode</li>
          <li>Spectacular drifts and advanced driving techniques</li>
          <li>High-quality 3D graphics</li>
          <li>Customizable vehicles</li>
          <li>Various and challenging circuits</li>
          <li>Immersive sound effects</li>
          <li>Intuitive user interface</li>
        </ul>

        <h3>How to Play CarGameOnline</h3>
        <p>
          CarGameOnline is a racing game accessible directly from your browser.
          No need to download or install anything. Just click on
          "Play" and start your automotive adventure. The game offers several modes:
        </p>
        <ul>
          <li>Free race mode for practice</li>
          <li>Competition against other players</li>
          <li>Daily challenges and tournaments</li>
          <li>Collection of rare vehicles</li>
        </ul>

        <h3>Optimized for SEO and Search Engines</h3>
        <p>
          Our racing car game is fully optimized for natural search engine optimization.
          Meta tags, structured data and textual content are designed to
          improve visibility on Google, Bing and other search engines.
        </p>

        <h3>Main SEO Keywords</h3>
        <p>
          racing game, car game, automobile racing, free game, online game, drift,
          multiplayer, 3D car game, free racing game, car game, car simulation,
          drift game, online racing, browser game, no download game
        </p>

        <div itemScope itemType="https://schema.org/VideoGame">
          <meta itemProp="name" content="CarGameOnline" />
          <meta itemProp="description" content="Free online racing car game with drifts and multiplayer" />
          <meta itemProp="genre" content="Racing" />
          <meta itemProp="gamePlatform" content="Web Browser" />
          <meta itemProp="operatingSystem" content="Any" />
          <meta itemProp="applicationCategory" content="Game" />
          <meta itemProp="offers" itemScope itemType="https://schema.org/Offer" />
          <meta itemProp="price" content="0" />
          <meta itemProp="priceCurrency" content="USD" />
        </div>

        <div itemScope itemType="https://schema.org/WebApplication">
          <meta itemProp="name" content="CarGameOnline" />
          <meta itemProp="description" content="Free online racing car game" />
          <meta itemProp="applicationCategory" content="EntertainmentApplication" />
          <meta itemProp="operatingSystem" content="Any" />
          <meta itemProp="offers" itemScope itemType="https://schema.org/Offer" />
          <meta itemProp="price" content="0" />
          <meta itemProp="priceCurrency" content="USD" />
        </div>
      </div>
    </section>
  );
};

export default HeaderSEO;
