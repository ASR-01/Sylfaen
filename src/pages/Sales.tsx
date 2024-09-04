import "./pages.css";
const Sales = () => {
  return (
    <div className="sales_container">
      <h1> Sylfaen Multilingual Software </h1>
      <div className="sales_container_content">
        <p>Your go-to solution for multilingual typing and text processing</p>

        <section className="sales_container_content_01">
          <h2>Features</h2>
          <ul>
            <li>
              Supports typing and text processing in multiple Indian languages
              such as Hindi, Marathi, Tamil, and more.
            </li>
            <li>
              Simple and intuitive user interface suitable for beginners and
              professionals alike.
            </li>
            <li>
              Advanced text editing features including spell-check,
              auto-correct, and predictive typing.
            </li>
            <li>Export documents in various formats including PDF and Word.</li>
            <li>
              Regular updates and support to ensure compatibility with the
              latest operating systems and devices.
            </li>
          </ul>
        </section>

        <div className="pricing_cart">
          <section>
            <h2>Pricing</h2>
            <p>Discover the power of Rear Multilingual Software today!</p>
            <p>
              <strong>Free Trial:</strong> Experience Rear for free for 14 days.
            </p>
            <p>
              Start Now!
            </p>
            <button className="button">Start Free Trial</button>
          </section>
          <section>
            <h2>Pricing</h2>
            <p>Discover the power of Rear Multilingual Software today!</p>

            <p>
              <strong>Free Trial:</strong> Experience Rear for free for 14 days.
            </p>
            <p>
              <strong>Subscription:</strong> <span  className="price">₹17,000</span> Lifetime.
            </p>
            <button className="button">Start Free Trial</button>
          </section>
          <section>
            <h2>Pricing</h2>
            <p>Discover the power of Rear Multilingual Software today!</p>
            <p>
              <strong>Upcomming:</strong> With more features and with AI.
            </p>
            <p>
              <strong>Subscription:</strong>  <span className="price" >₹1,70,000</span>  Lifetime.
            </p>
            <button className="button" disabled>Comming Soon</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sales;
