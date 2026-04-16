import React from "react";

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" name="name" placeholder="Enter your name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" rows="5" placeholder="Message" required />
      <button type="submit">Send message</button>
    </form>
  );
}
