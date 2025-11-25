import React from "react";

export default function ContactForm(){
  return (
    <div className="contact-card card">
      <p style={{color: "var(--muted)"}}>Prefer email — or drop a message and I will get back to you.</p>
      <form onSubmit={(e)=>{ e.preventDefault(); alert('Thanks! Replace this with real submit.'); }}>
        <div className="row" style={{marginTop:12}}>
          <input name="name" placeholder="Your name" required />
          <input name="email" placeholder="Your email" required />
        </div>
        <textarea name="message" placeholder="Message" rows="5" style={{marginTop:10}}></textarea>
        <div style={{marginTop:10}}>
          <button className="btn" type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
