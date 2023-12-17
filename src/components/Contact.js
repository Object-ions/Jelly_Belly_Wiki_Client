import React from "react";
import mandarin from "../img/mandarin.png";

const Contact = () => {
  return (
    <div className="Contact">
      <div class="Contact-container">
        <div className="Contact-inside">
          <h3>Contact Us</h3>
          <form className="Contact-form">
            <label for="name">Your Name:</label>
            <input type="text" name="name" required />
            <label for="email">Email Address:</label>
            <input type="email" name="email" required />
            <label for="text-area">What's on Your Mind?</label>
            <textarea name="text-area" required />
            <button type="submit">Submit</button>
          </form>
          <img src={mandarin} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
