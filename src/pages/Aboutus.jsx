import React from 'react'
import Navbar from '../components/Navbars'
import Footer from '../components/Footer'
import "../styles/About.css"

export default function Aboutus() {

  const moments = [
    {
      id: 1,
      image: '/home-image.jpg',
      title: 'Your morning ritual',
      description:
        'A coffee to start the day and a pastry to look forward to.',
    },
    {
      id: 2,
      image: '/home-image.jpg',
      title: 'Time for a catch-up',
      description:
        'A familiar corner for good conversation and second coffees.',
    },
    {
      id: 3,
      image: '/home-image.png',
      title: 'A moment to yourself',
      description:
        'A seat by the window. No rush. Just a little room to pause.',
    },
  ];
  return (
    <>
      <section className="about-section">
        <div className="about-content">
          <p className="about-eyebrow">
            ABOUT US / HELLO, NEIGHBOUR
          </p>

          <h2 className="about-title">
            A little everyday goodness.
          </h2>

          <p className="about-description">
            Bakewell Street is built around a simple idea:
            everyday moments deserve something good. A warm
            pastry. A familiar face. A table that makes you
            feel at home.
          </p>

          <img
            src="/aboutUsPhoto.jpg"
            alt="Inside the Bakewell Street bakery and coffee shop"
            className="about-image"
          />
        </div>
        <div className="moments-content">
          <div className="moments-header">
            <div>
              <p className="moments-eyebrow">
                MAKE YOURSELF AT HOME
              </p>

              <h2 className="moments-title">
                GOOD BREAD BETTER DAYS
              </h2>
            </div>

            <p className="moments-intro">
              For early starts, slow afternoons and everything
              in between.
            </p>
          </div>

          <div className="moments-grid">
            {moments.map((moment) => (
              <div className="moment-card" key={moment.id}>
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="moment-image"
                />

                <h3 className="moment-title">
                  {moment.title}
                </h3>

                <p className="moment-description">
                  {moment.description}
                </p>
              </div>
            ))}
          </div>
            
        </div>
        
      </section>
      <div className="about-us-slogan">
          <div className="slogan-content">
            <h3>Your next Favorite Street.</h3>

            <p>
              A good pastry. A carefully made coffee.
              A warm welcome, wherever you find us.
            </p>
          </div>

          <a href="#branches" className="slogan-button">
            Find your Bakewell Street
            <span>↗</span>
          </a>
      </div>
    </>
  )
}
