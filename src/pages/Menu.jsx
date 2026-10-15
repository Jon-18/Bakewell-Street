import { useState } from 'react'
import '../styles/Menu.css'

export default function Menu() {
    const [activeMenu, setActiveMenu] = useState("pastries");
    const isPastries = activeMenu === "pastries";

  return (  
    <div className="cafe-menu">
      <nav className="menu-nav">
        <div className="menu-links">
          <button
            className={isPastries ? "active" : ""}
            onClick={() => setActiveMenu("pastries")}
          >
            Pastries ↓
          </button>

          <button
            className={!isPastries ? "active" : ""}
            onClick={() => setActiveMenu("coffee")}
          >
            Coffee ↓
          </button>
        </div>

        <span className="menu-disclaimer">
          Sample menu · All prices and availability are illustrative.
        </span>
      </nav>

      <section
        className={`menu-section ${isPastries ? "pastry-section" : "coffee-section"}`}
        key={activeMenu}
      >
        <div className="menu-heading">
          <div>
            <p className="eyebrow">
              {isPastries ? "FROM THE OVEN" : "FROM THE COFFEE BAR"}
            </p>

            <h1>{isPastries ? "Pastries" : "Coffee"}</h1>
          </div>

          <p className="heading-description">
            {isPastries
              ? "Golden layers, soft centres and something to make your day."
              : "Your usual, or a new favourite. Carefully made, one cup at a time."}
          </p>
        </div>

        <div className="menu-grid">
          {menuItems[activeMenu].map((item) => (
            <article className="menu-item" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                className="menu-image"
              />

              <div className="item-title-row">
                <h2>{item.name}</h2>
                <span className="item-price">{item.price}</span>
              </div>

              <p className="item-description">{item.description}</p>
              <p className="item-allergens">{item.allergens}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
