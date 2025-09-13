import React, { useEffect } from "react";
import "./QuoteModal.css"; // we'll create this next

export default function QuoteModal({ isOpen, onClose }) {
  // prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing on inner click
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Get a Free Quote</h2>
        <p>Tell us about your project — we’ll respond within 24 hours.</p>

        <form className="quote-form">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" required></textarea>
          </label>
          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Send Request
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
