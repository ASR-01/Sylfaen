import "./pages.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <h1> Contact Us - Sylfaen </h1>
      <div className="contact_container_content">
        <p>
          At Sylfaen, we are dedicated to providing top-notch multilingual font
          software solutions. Whether you have a question about our services,
          need support, or want to provide feedback, we're here to help. Please
          find our contact details below:
        </p>

        <div className="contact_container_content_addresses">
          <div className="contact_container_content_addresses_01">
            <h3>Registration Office</h3>
            <h4>Address:</h4>
            <p>
              Mira Co-op Housing Society Building No A3, 02 Behind Hotel Amar
              Palace Mira Bhayandar Thana 401107
            </p>
          </div>

          <div className="contact_container_content_addresses_01 office_zone">
            <h3>Office Zone</h3>
            <h4>Address:</h4>
            <p>The Zone F 96 Chandavarkar Lane Borivali West Mumbai</p>
          </div>
        </div>

        <p>
          Our primary office zone is located in Borivali West, one of Mumbai’s
          bustling and vibrant neighborhoods. Positioned at F 96, Chandavarkar
          Lane, this office is the operational heart of Sylfaen. Here, we manage
          our day-to-day activities, including development, customer support,
          and business operations. The location is well-known for its commercial
          significance and offers excellent connectivity to the rest of Mumbai,
          making it convenient for clients and partners to reach us.
        </p>

        <h2>Contact Information</h2>
        <div className="contact_container_content_contact">
          <div>
            <h4>Email:</h4>
            <ul>
              <li className="contact_info">
                For general inquiries:{" "}
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  sylfaen.software@gmail.com
                </a>
              </li>
              <li className="contact_info">
                For support:{" "}
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  sylfaen.software@gmail.com
                </a>
              </li>
              <li className="contact_info">
                For business inquiries:
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  advyogeshsjagdale@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Office Hours:</h4>
            <ul>
              <li>Registration Office: +91 9323572423</li>
              <li>Borivali Office: +91 7045932108</li>
            </ul>
          </div>
          <div>
            <h4>Office Hours:</h4>
            <ul>
              <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.2886858878483!2d72.8761457747253!3d19.269808145860612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0616319475f%3A0x4ab0e1213c0c75c2!2sAmar%20Palace!5e0!3m2!1sen!2sin!4v1720951832104!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>

        <div>
          <h4>Get in Touch</h4>
          If you have any questions or need assistance, please do not hesitate
          to reach out to us via email or phone. Our team is always ready to
          assist you with any inquiries or support you may need.
        </div>
      </div>
    </div>
  );
};

export default Contact;
