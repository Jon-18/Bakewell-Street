import "../styles/MenuPages.css"
import "../styles/Menu.css"
import { useState } from 'react'

const menuItems = {
  pastries: [
    {
      name: "Butter croissant",
      price: "£3.50",
      description: "Golden layers and a soft buttery centre.",
      allergens: "Contains wheat, milk, egg",
      image: "/home-image.jpg",
    },
    // Keep your other pastry items here
  ],

  coffee: [
    {
      name: "Espresso",
      price: "£2.80",
      description: "A small, full-bodied cup.",
      allergens: "Coffee",
      image: "/home-image.jpg",
    },
    // Keep your other coffee items here
  ],

  cakes: [
    {
      name: "Chocolate cake",
      price: "£4.50",
      description: "Rich chocolate cake with a smooth finish.",
      allergens: "Contains wheat, milk, egg",
      image: "/home-image.jpg",
    },
  ],

  sandwiches: [
    {
      name: "Chicken sandwich",
      price: "£6.50",
      description: "A freshly prepared sandwich for lunch.",
      allergens: "Check ingredients before ordering",
      image: "/home-image.jpg",
    },
  ],

  drinks: [
    {
      name: "Iced latte",
      price: "£4.20",
      description: "Espresso and cool milk over ice.",
      allergens: "Contains milk; alternatives may be available",
      image: "/home-image.jpg",
    },
  ],
};

const categoryInfo = {
  pastries: {
    eyebrow: "FROM THE OVEN",
    title: "Pastries",
    description:
      "Golden layers, soft centres and something to make your day.",
  },
  coffee: {
    eyebrow: "FROM THE COFFEE BAR",
    title: "Coffee",
    description:
      "Your usual, or a new favourite. Carefully made, one cup at a time.",
  },
  cakes: {
    eyebrow: "SOMETHING SWEET",
    title: "Cakes",
    description:
      "A little slice of happiness for your everyday moments.",
  },
  sandwiches: {
    eyebrow: "MADE FOR LUNCH",
    title: "Sandwiches",
    description:
      "Freshly prepared bites for a slower lunch or a busy day.",
  },
  drinks: {
    eyebrow: "SOMETHING REFRESHING",
    title: "Cold Drinks",
    description:
      "Cool, refreshing favourites for every kind of afternoon.",
  },
};

export default function MenuPages() {
  const [activeMenu, setActiveMenu] = useState("pastries");
  
  const categories = [
    { id: "pastries", label: "Pastries" },
    { id: "coffee", label: "Coffee" },
    { id: "cakes", label: "Cakes" },
    { id: "sandwiches", label: "Sandwiches" },
    { id: "drinks", label: "Cold Drinks" },
  ];

  const activeCategory = categories.find(
    (category) => category.id === activeMenu
  );

  const activeItems = menuItems[activeMenu];
  return (
    <>
    <div>
      <main className="menu-page">
        <header className="menu-hero">
          <p className="menu-eyebrow">
            Our menu / Pastries & Coffee
          </p>

          <h1>Find your new usual.</h1>

          <p className="menu-description">
            A pastry worth pausing for. A coffee just the way
            you like it. Explore a little of what you'll find
            at our counter.
          </p>
        </header>
        <div className="cafe-menu"> 
          <nav className="menu-nav">
            <div className="menu-links">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={
                    activeMenu === category.id ? "active" : ""
                  }
                  onClick={() => setActiveMenu(category.id)}
                  aria-pressed={activeMenu === category.id}
                >
                  {category.label}
                  <span aria-hidden="true"> ↓</span>
                </button>
              ))}
            </div>

            <span className="menu-disclaimer">
              Sample menu · Prices and availability may vary.
            </span>
          </nav>
       
          <div className="menu-heading">
            <div>
              <p className="eyebrow">
                {categoryInfo[activeMenu].eyebrow}
              </p>

              <h1>{categoryInfo[activeMenu].title}</h1>
            </div>

            <p className="heading-description">
              {categoryInfo[activeMenu].description}
            </p>
          </div>


      <section className="menu-section" key={activeMenu}>
        <div className="menu-grid">
          {activeItems.map((item) => (
            <article className="menu-item" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                className="menu-image"
              />

              <div className="item-title-row">
                <h3>{item.name}</h3>
                <span className="item-price">{item.price}</span>
              </div>

              <p className="item-description">{item.description}</p>
              <p className="item-allergens">{item.allergens}</p>
            </article>
          ))}
        </div>
      </section>
      </div>
      </main>
      <section className="order-note">
        <h3 className="order-note-title">
          A little note before you order.
        </h3>

        <div className="order-note-content">
          <p>
            Allergens shown are sample information, not a verified ingredient
            list. Please ask the team about ingredients, allergies and
            cross-contact before ordering.
          </p>

          <p>
            Offerings may vary by café. Milk alternatives, prices and
            availability should be confirmed with your chosen branch.
          </p>
        </div>
      </section>
      

      <section className="branches-slogan">
        <div className="slogan-content">
          <h3>Something good is just around the corner.</h3>
          <p>
            Discover our neighbourhood cafés and find your next coffee stop.
          </p>
        </div>

        <a href="/branches" className="slogan-button">
          Find your Bakewell Street
          <span>↗</span>
        </a>
      </section>
    </div>
    </>
   
  )
}
