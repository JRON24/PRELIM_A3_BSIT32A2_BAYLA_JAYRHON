import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to Lyceum of Alabang</h1>
      <p className="lead text-center">
        Committed to providing quality education and fostering community
        development.
      </p>
      <section className="mt-5">
        <h2>Recent News and Events</h2>
        <article className="mt-4">
          <h3>Celebrating 20th Founding Anniversary</h3>
          <p>
            Celebrating 20 years of educational excellence and community
            service.
          </p>
        </article>
        <article className="mt-4">
          <h3>LYCEUM OF ALABANG Retains ISO 9001:2015 Compliance</h3>
          <p>
            Proudly retaining our ISO 9001:2015 certification, underscoring our
            dedication to quality education.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Home;
