// src/components/WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  // Replace this with your phone number in international format without "+"
  const phoneNumber = "919890898284"; 

  // WhatsApp chat link
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-btn"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
