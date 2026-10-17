
import '../styles/LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-brand">
        <img
          src="/logo.jpg"
          alt="Bakewell Street"
          className="loading-logo"
          data-loader-critical
        />

        <p className="loading-label">BAKERY & COFFEE</p>

        <div className="loading-dots" aria-label="Loading">
          <span />
          <span />
          <span />
        </div>
      </div>

      <p className="loading-message">
        A little everyday goodness.
      </p>
    </div>
  );
}

export default LoadingScreen;
