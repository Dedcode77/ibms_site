import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import Map from "../components/contact/Map";

const ContactPage = () => {
  return (
    <main>
      <ContactInfo />
      <ContactForm />
      <Map />
    </main>
  );
};

export default ContactPage;
