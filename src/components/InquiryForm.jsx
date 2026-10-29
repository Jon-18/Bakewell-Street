
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Franchise.css";

function InquiryForm() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzCpYsv-X4zMmrBh_cIEGZjr0HPnxAPRMlGlgvP52i5LelDIDu49yP0NETEYmRL1Rug/exec";

const sendEmail = async (e) => {
  e.preventDefault();

  if (isSending) return;

  setIsSending(true);
  setStatus("");
  setIsSuccess(false);

  try {
    const formData = new FormData(form.current);

    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      message: formData.get("message"),
      consent: formData.get("consent") === "on",
    };

    // no-cors avoids a browser CORS preflight, but
    // does not let us read the server's response.
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
   
    });
       console.log(data)

    setStatus(
      "Your inquiry has been submitted. Please check your email for a response."
    );
    setIsSuccess(true);
    form.current.reset();
  } catch (error) {
    console.error("Inquiry submission failed:", error);

    setStatus(
      "Sorry, we couldn't submit your inquiry. Please try again."
    );
  } finally {
    setIsSending(false);
  }
};


  return (
    <form
      ref={form}
      className="franchise-form"
      onSubmit={sendEmail}
    >
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

        <div className="form-field form-field-full">
          <label htmlFor="message">
            Tell us about your plans *
          </label>
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

      <button
        type="submit"
        className="franchise-submit"
        disabled={isSending}
      >
        {isSending ? "Sending..." : "Send my inquiry"}
        {!isSending && <span> ↗</span>}
      </button>

      {status && (
        <p
          className="form-note"
          role="status"
          aria-live="polite"
          style={{
            color: isSuccess ? "#426B45" : "#A33A32",
          }}
        >
          {status}
        </p>
      )}

      <p className="form-note">
        Your information will be used to respond to your inquiry.
      </p>
    </form>
  );
}

export default InquiryForm;
