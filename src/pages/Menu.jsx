import { useState } from 'react'
import '../styles/Menu.css'

const menuItems = {
  pastries: [
    {
      name: "Butter croissant",
      price: "£3.50",
      description:
        "Golden layers, a delicate crunch and a soft buttery centre.",
      allergens: "Contains wheat, milk, egg",
      image: "/home-image.jpg",
    },
    {
      name: "Pain au chocolat",
      price: "£4.00",
      description:
        "Flaky pastry wrapped around a rich dark chocolate centre.",
      allergens: "Contains wheat, milk, egg, soy",
      image: "/home-image.jpg",
    },
    {
      name: "Cinnamon swirl",
      price: "£3.80",
      description:
        "A soft spiral of cinnamon, finished with a light glaze.",
      allergens: "Contains wheat, milk, egg",
      image: "/home-image.jpg",
    },
    {
      name: "Almond croissant",
      price: "£4.50",
      description:
        "Buttery pastry, almond cream and toasted almond flakes.",
      allergens: "Contains wheat, milk, egg, nuts",
      image: "/home-image.jpg",
    },
  ],

  coffee: [
    {
      name: "Espresso",
      price: "£2.80",
      description:
        "A small, full-bodied cup with a beautifully balanced finish.",
      allergens: "Double shot · served hot",
      image: "/home-image.jpg",
    },
    {
      name: "Flat white",
      price: "£3.60",
      description:
        "Rich espresso meets silky milk. Your everyday favourite.",
      allergens: "Contains milk · oat option available",
      image: "/home-image.jpg",
    },
    {
      name: "Cappuccino",
      price: "£3.60",
      description:
        "Espresso, steamed milk and a generous cloud of foam.",
      allergens: "Contains milk · oat option available",
      image: "/home-image.jpg",
    },
    {
      name: "Iced latte",
      price: "£4.20",
      description:
        "Espresso and cool milk over ice, for a slower afternoon.",
      allergens: "Contains milk · oat option available",
      image: "/home-image.jpg",
    },

  ],
};

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
