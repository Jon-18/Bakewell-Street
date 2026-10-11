import React from 'react'

export default function Home() {
  return (
    <>
     <main className="home-section">
          <div className="home-content-left">
            <p>BAKEWELL STREET / BAKERY & COFFEE</p>
            <h1>
              A little street.
              <br />
              A lot of flavor.
            </h1>
            <p className="home-description">
              Flaky pastries, carefully made coffee and a warm
              welcome. A little everyday goodness, right on your
              street.
            </p>
            <div className="home-actions">
              <a href="#menu" className="primary-button">
                Explore the menu <span>↗</span>
              </a>

              <a href="#branches" className="text-link">
                Find a café
              </a>
            </div>

            <p className="home-note">
              SLOW DOWN. SAVOUR SOMETHING GOOD.
            </p>
          </div>
          <div className="home-content-right">
              <img
                src="/home-image.jpg"
                alt="Coffee and a freshly baked pastry"
                className="home-image"
              />

              <div className="home-image-caption">
                <span>A pastry, a coffee, a moment for yourself.</span>
                <span className="caption-label">THE DAILY RITUAL</span>
              </div>
          </div>
          
        </main>
        <div className="home-slogan">
            <h2>▪ Pastries worth pausing for</h2>
            <h2>▪ Coffee, made with care</h2>
            <h2>▪ Your coffee table</h2>
        </div>
    </>
  )
}
