import "./pages.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <h1> Contact Us - Sylfaen </h1>
      <h1 style={{color:"red"}} >* Sylfean software is not a free software * </h1>
      <div className="contact_container_content">
        <p>
          At Sylfaen, we are dedicated to providing top-notch multilingual font
          software solutions. Whether you have a question about our services,
          need support, or want to provide feedback, we're here to help. Please
          find our contact details below:
        </p>

        <div className="contact_container_content_addresses">
          <div className="contact_container_content_addresses_01">
            <h3>Registration </h3>
            <h4>Address:</h4>
            <p>
              Mira Co-op Housing Society Building No A3, 02 Behind Hotel Amar
              Palace Mira Bhayandar Thana 401107
            </p>
          </div>

          <div className="contact_container_content_addresses_01 office_zone">
            <h3>Office</h3>
            <h4>Address:</h4>
            <p>
              {" "}
              XUV TECHNOLOGY
              F 96, The Zone Chandavarkar Road, Borivali West Mumbai 400092
            </p>
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

        <h2 className="contact_h2">Contact Information</h2>
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
                For support and help:{" "}
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
            <h4>Phone:</h4>
            <ul>
            <li style={{fontWeight:"700"}}> Yogesh S Jagdale</li>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1863052734107!2d72.84412937753348!3d19.23071060072491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d70da75639%3A0x2eafc54ea49fe390!2sChandavarkar%20Rd%2C%20Borivali%2C%20Mumbai%2C%20Maharashtra%20400092!5e0!3m2!1sen!2sin!4v1721184702197!5m2!1sen!2sin"
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
