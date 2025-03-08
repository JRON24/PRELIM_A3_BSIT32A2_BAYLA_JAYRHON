import React from "react";

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Contact Us</h1>
      <section className="mt-4">
        <h2>Address</h2>
        <p>
          Lyceum of Alabang – Main Bldg. Km. 30 National Road, Tunasan,
          Muntinlupa City
        </p>
      </section>
      <section className="mt-4">
        <h2>Telephone Numbers</h2>
        <p>(02) 8856-9323 | 8856-9324</p>
      </section>
      <section className="mt-4">
        <h2>Fax Number</h2>
        <p>861-5100</p>
      </section>
      <section className="mt-4">
        <h2>Follow Us on Social Media</h2>
        <p>
          Facebook:{" "}
          <a href="https://www.facebook.com/lyceumofalabanginc/">
            Lyceum of Alabang, Inc
          </a>
        </p>
      </section>
    </div>
  );
};

export default Contact;
