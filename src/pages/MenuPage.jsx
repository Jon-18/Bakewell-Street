import "../styles/MenuPages.css"
import Menu from "../pages/Menu.jsx"


export default function MenuPages() {
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
         <Menu />
      </main>
      <div className="">
          <div className="">
            <h3>A little note beforee you order.</h3>
          </div>

          <a href="#branches" className="">
            Allergens shown are sample information, not a verified ingredient list. Please ask the team about ingredients, allergies and cross-contact before ordering.
            <span>↗</span>
          </a>
          <p>
            Offerings may vary by café. Milk alternatives, prices and availability should be confirmed with your chosen branch.
          </p>
      </div>
      <div className="">
          <div className="">
            <h3>Something good is just around the corner.</h3>

            <p>
              Discover our neighbourhood cafés and find your next coffee stop.
            </p>
          </div>

          <a href="#branches" className="">
            Find your Bakewell Street
            <span>↗</span>
          </a>
      </div>
    </div>
    </>
   
  )
}
