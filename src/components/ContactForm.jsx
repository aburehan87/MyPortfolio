import React, { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "033354d3-a344-43df-b3ae-99b942623b82");
    // formData.append("email", "nkodetechnologies@gmail.com"); // receiver email

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setResult("Thank you! Your message has been sent.");
      e.target.reset(); // clear form
    } else {
      setResult("Error! Something went wrong.");
    }
  };

  return (
    <div className="contact-card card">
      <p style={{ color: "var(--muted)" }}>
        Prefer email — or drop a message and I will get back to you.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="row" style={{ marginTop: 12 }}>
          <input name="name" placeholder="Your name" required />
          <input name="email" placeholder="Your email" required />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          style={{ marginTop: 10 }}
          required
        ></textarea>

        <div style={{ marginTop: 10 }}>
          <button className="btn" type="submit">
            Send
          </button>
        </div>

        {result && (
          <p style={{ marginTop: 10, color: "var(--muted)" }}>{result}</p>
        )}
      </form>
    </div>
  );
}
