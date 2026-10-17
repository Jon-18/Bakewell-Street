import "../styles/Branches.css"
import { useState } from 'react'

const branches = [  
  {
    id: 1,
    image: '/home-image.jpg',
    label: 'THE ORIGINAL NEIGHBOURHOOD SPOT',
    name: 'Riverside',
    address: '12 River Lane, London SE1 2AB',
    hours: 'Mon–Fri 7:30–18:00 · Sat–Sun 8:00–17:00',
    features: 'Indoor seating · Takeaway · Step-free entrance',
  },
  {
    id: 2,
    image: '/home-image.jpg',
    label: 'A LEAFY CORNER FOR COFFEE & CATCH-UPS',
    name: 'Garden Quarter',
    address: '42 Garden Street, London N1 4CD',
    hours: 'Mon–Fri 8:00–18:00 · Sat–Sun 8:30–17:00',
    features: 'Courtyard seating · Takeaway · Dog-friendly outdoors',
  },
  {
    id: 3,
    image: '/home-image.jpg',
    label: 'GOOD MORNINGS, EVEN ON THE MOVE',
    name: 'Station House',
    address: '7 Station Road, London E2 8EF',
    hours: 'Mon–Fri 7:00–18:00 · Sat–Sun 8:00–16:00',
    features: 'Indoor seating · Takeaway · Near public transport',
  },

  // Add more branches here
  {
    id: 4,
    image: '/home-image.jpg',
    label: 'YOUR LITTLE CITY RETREAT',
    name: 'Market Square',
    address: '18 Market Street, London',
    hours: 'Mon–Fri 7:30–18:00 · Sat–Sun 8:00–17:00',
    features: 'Indoor seating · Takeaway',
  },
  {
    id: 5,
    image: '/home-image.jpg',
    label: 'A QUIET CORNER TO UNWIND',
    name: 'Willow Lane',
    address: '25 Willow Lane, London',
    hours: 'Mon–Fri 8:00–18:00 · Sat–Sun 8:30–17:00',
    features: 'Outdoor seating · Takeaway',
  },
  {
    id: 6,
    image: '/home-image.jpg',
    label: 'FRESH COFFEE FOR BUSY DAYS',
    name: 'Central Corner',
    address: '9 Central Road, London',
    hours: 'Mon–Fri 7:00–18:00 · Sat–Sun 8:00–16:00',
    features: 'Indoor seating · Takeaway · Near public transport',
  },
];

const visitTips = [
  {
    title: "Staying or taking away?",
    description:
      "Settle in for a coffee or choose a pastry to go. The sample branch cards show the seating options for each café.",
  },
  {
    title: "Any dietary questions?",
    description:
      "Speak to the café team before ordering. They can help confirm ingredients, milk alternatives and allergen information.",
  },
  {
    title: "Bringing a group?",
    description:
      "Check seating and accessibility with your chosen café in advance. Facilities and opening times can change.",
  },
];

const BRANCHES_PER_PAGE = 3;

export default function Branches() {
   const [currentPage, setCurrentPage] = useState(0);

   const totalPages = Math.ceil(
    branches.length / BRANCHES_PER_PAGE
    );

    const startIndex = currentPage * BRANCHES_PER_PAGE;

    const visibleBranches = branches.slice(
      startIndex,
      startIndex + BRANCHES_PER_PAGE
    );


  return (
    <>
      <section className="branches-section" id="branches">
        <div className="branches-header">
          <p className="branches-eyebrow">
            OUR BRANCHES / FIND YOUR FAVOURITE CORNER
          </p>

          <h2 className="branches-title">
            A place to pause. A table for you.
          </h2>

          <span className="branches-count">
            All cafés / {String(branches.length).padStart(2, '0')}
          </span>
        </div>

        <div className="branches-grid">
          {visibleBranches.map((branch) => (
            <article className="branch-card" key={branch.id}>
              <img
                src={branch.image}
                alt={`${branch.name} café`}
                className="branch-image"
              />

              <p className="branch-label">{branch.label}</p>

              <h3 className="branch-name">{branch.name}</h3>

              <div className="branch-details">
                <div className="branch-detail">
                  <h4>FIND US</h4>
                  <p>{branch.address}</p>
                </div>

                <div className="branch-detail">
                  <h4>OPENING HOURS</h4>
                  <p>{branch.hours}</p>
                </div>

                <p className="branch-features">
                  {branch.features}
                </p>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="branches-pagination">
            <button
              type="button"
              className="branch-page-button"
              onClick={() =>
                setCurrentPage((page) => page - 1)
              }
              disabled={currentPage === 0}
            >
              ← Previous
            </button>

            <span className="branch-page-number">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              type="button"
              className="branch-page-button"
              onClick={() =>
                setCurrentPage((page) => page + 1)
              }
              disabled={currentPage === totalPages - 1}
            >
              Next →
            </button>
          </div>
        )}
       
      </section>
       <div className="cafe-page">
        <section className="hero">
          <div className="hero-image">
            <img
              src="/home-image.jpg"
              alt="A welcoming outdoor café with tables and greenery"
            />
          </div>

          <div className="hero-content">
            <span className="eyebrow">MAKE YOURSELF AT HOME</span>
            <h1>Come for the coffee. Stay for the moment.</h1>
            <p>
              From a quick stop on your way to work to an afternoon in the
              courtyard, there’s a Bakewell Street kind of break for every day.
            </p>
          </div>
        </section>

        <section className="visit-section">
          <h2>A little before you visit.</h2>

          <div className="tips-grid">
            {visitTips.map((tip) => (
              <article className="tip-card" key={tip.title}>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="menu-section">
          <div className="menu-copy">
            <h2>Good things happen on the street.</h2>
            <p>
              Take a look at our pastry and coffee menu before your next visit.
            </p>
          </div>

          <a className="menu-button" href="/menu">
            <span>Explore the menu</span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </section>
        </div>
   
    </>
  )
}
