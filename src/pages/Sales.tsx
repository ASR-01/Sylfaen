import { toast } from "react-toastify";
import "./pages.css";
import { Link } from "react-router-dom";
const Sales = () => {

  const handleToast = () => {
     toast.success("Soon Coming")
  }
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
            <p>Discover the power of Sylfaen today!</p>

            <p>
              <strong>Subscription:</strong>{" "}
              <span className="price">₹17,700</span> Lifetime.
            </p>
            <Link to={"https://register.sylfaen.in/"}>
              <button className="button">Buy Now</button>
            </Link>
          </section>
          <section>
            <h2>Pricing</h2>
            <p>Discover the power of Sylfaen today!</p>
            <p>
              <strong>Subscription:</strong>{" "}
              <span className="price">₹1,70,700</span> Lifetime.
            </p>
            <button  onClick={handleToast} className="button" >
              Buy Now
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sales;
