import "../styles/Branches.css"
import { useState } from 'react'

const branches = [  
  {
    id: 1,
    image: '/home-image.jpg',
    label: 'THE ORIGINAL NEIGHBOURHOOD SPOT',
    name: 'Jolly Industrial Park',
    address: 'Mark 1 Bldg. Jolly Industrial Park, Bypass access road, Brgy. parulan, Plaridel, Bulacan',
  },
  {
    id: 2,
    image: '/home-image.jpg',
    label: 'A LEAFY CORNER FOR COFFEE & CATCH-UPS',
    name: 'Lucena City',
    address: 'Dinglasan Bldg., Quezon Avenue, Brgy 1, Lucena City, 4301 '
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

];

const BRANCHES_PER_PAGE = 3;

export default function Branches() {
  const [currentPage, setCurrentPage] = useState(0);
   
const BRANCHES_PER_PAGE = 2;

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

      <div className="branch-image-wrapper">
        <img
          src={branch.image}
          alt={`${branch.name} café`}
          className="branch-image"
        />
      </div>

      <p className="branch-label">
        {branch.label}
      </p>

      <h3 className="branch-name">
        {branch.name}
      </h3>

      <div className="branch-details">
        <div className="branch-detail">
          <h4>FIND US</h4>
          <p>{branch.address}</p>
        </div>

        <p className="branch-features">
          {branch.features}
        </p>
      </div>

    </article>
  ))}
</div>

{/* Navigation buttons outside the images */}
{totalPages > 1 && (
  <div className="branch-navigation">

    <button
      type="button"
      className="branch-nav-button"
      onClick={() =>
        setCurrentPage((page) =>
          (page - 1 + totalPages) % totalPages
        )
      }
      aria-label="Previous branches"
    >
      ← Back
    </button>

    <button
      type="button"
      className="branch-nav-button"
      onClick={() =>
        setCurrentPage((page) =>
          (page + 1) % totalPages
        )
      }
      aria-label="Next branches"
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
              src="/BranchImage.jpg"
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
            Explore the menu
            <span>↗</span>
          </a>
        </section>
        </div>
   
    </>
  )
}
