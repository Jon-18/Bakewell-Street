
import '../styles/Franchise.css'


export default function Franchise() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect your email service or backend here.
    alert('Thank you! Your inquiry form is ready to be connected to email.');
  };
  return ( 
  <>
   <main className="franchise-page">
      {/* Introduction */}
      <section className="franchise-intro">
        <p className="franchise-eyebrow">
          FRANCHISE WITH US / GROW THE BAKEWELL STREET WAY
        </p>

        <h1 className="franchise-title">
          Good things grow together.
        </h1>

        <p className="franchise-description">
          Share the love of pastries, coffee and a warm neighbourhood.
          Let's build a welcoming café experience together with
          Bakewell Street.
        </p>

        <img
          src="/home-image.jpg"
          alt="Bakewell Street café with fresh pastries and coffee"
          className="franchise-hero-image"
        />
      </section>

      {/* Brand Highlights */}
      <section className="franchise-highlights">
        <article>
          <h3>Care for the craft</h3>
          <p>
            Approachable food, carefully made coffee and
            a passion for everyday goodness.
          </p>
        </article>

        <article>
          <h3>A warm welcome</h3>
          <p>
            A genuine neighbourhood café experience that
            makes every guest feel at home.
          </p>
        </article>

        <article>
          <h3>Local understanding</h3>
          <p>
            Build a café that fits your community while
            staying true to our shared values.
          </p>
        </article>
      </section>

      {/* Franchise Inquiry */}
      <section className="franchise-inquiry" id="franchise-inquiry">
        <div className="inquiry-intro">
          <p className="franchise-eyebrow">
            YOUR NEXT CHAPTER / FRANCHISE OPPORTUNITIES
          </p>

          <h2>Tell us what you have in mind.</h2>

          <p>
            We're interested in learning about you and your plans.
            Tell us a little about your background, preferred location
            and vision for your future café.
          </p>

          <img
            src="/home-image.jpg"
            alt="Guests enjoying coffee together in a café garden"
            className="inquiry-image"
          />
        </div>

        <form className="franchise-form" onSubmit={handleSubmit}>
          <h3>Let's start a conversation.</h3>

          <p className="form-intro">
            Tell us about yourself and the kind of Bakewell Street
            café you hope to create.
          </p>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="fullName">Full name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email address *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
                autoComplete="tel"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="location">Preferred location *</label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="City or neighbourhood"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="experience">Business experience *</label>
              <select
                id="experience"
                name="experience"
                defaultValue=""
                required
              >
                <option value="" disabled>Select an option</option>
                <option value="first-time">First-time business owner</option>
                <option value="hospitality">Hospitality experience</option>
                <option value="business-owner">Existing business owner</option>
                <option value="franchisee">Franchise experience</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="investment">Investment range *</label>
              <select
                id="investment"
                name="investment"
                defaultValue=""
                required
              >
                <option value="" disabled>Select a range</option>
                <option value="under-1m">Under ₱1 million</option>
                <option value="1m-3m">₱1 million – ₱3 million</option>
                <option value="3m-5m">₱3 million – ₱5 million</option>
                <option value="over-5m">Over ₱5 million</option>
                <option value="exploring">Still exploring</option>
              </select>
            </div>

            <div className="form-field form-field-full">
              <label htmlFor="message">Tell us about your plans *</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Share your vision, preferred location, or any questions..."
                required
              />
            </div>
          </div>

          <label className="form-consent">
            <input type="checkbox" name="consent" required />
            <span>
              I agree to be contacted about my franchise inquiry.
            </span>
          </label>

          <button type="submit" className="franchise-submit">
            Send my inquiry <span>↗</span>
          </button>

          <p className="form-note">
            Your information will be used to respond to your inquiry.
          </p>
        </form>
      </section>

      {/* Closing Section */}
      <section className="franchise-closing">
        <p className="franchise-eyebrow">A LITTLE NOTE FROM BAKEWELL</p>

        <h2>From a hello to a conversation.</h2>

        <p>
          Interested in joining our neighbourhood? We'd love to hear
          what you're dreaming of.
        </p>
      </section>
    </main>
    </>
  )
}
