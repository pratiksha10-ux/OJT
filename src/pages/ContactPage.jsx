import React from 'react';
import { Link } from 'react-router-dom';
const ContactPage = () => {
  return (
     <div style={{ 
      backgroundColor: "#52c7ca",
        minHeight: "100vh",           // 🟢 Full viewport height
        width: "100vw",               // 🟢 Full viewport width
        margin: 0,
        padding: "2rem",
        boxSizing: "border-box",     // 🟢 Prevents layout overflow
        overflowX: "hidden",         // 🟢 Prevent horizontal scroll
     }}>
      <div style={{ backgroundColor: "white", maxWidth: "800px", margin: "0 auto", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h1 style={{ textAlign: "center", color: "#007bff", fontWeight: "bold" }}>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
        
        <hr />
        <h2>General Enquiries</h2>
        <p><strong>Vivekanand College Main Campus</strong></p>
        <p>
          [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071] <br />
          India
        </p>
        <p>Phone: <strong>+91 12345 67890</strong></p>
        <p>Email: <strong>info@vivekanandcollege.edu</strong></p>
        <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

        <hr />
        <h2>Admissions Office</h2>
        <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
        <p>Phone: +91 98765 43210</p>
        <p>Email: admissions@vivekanandcollege.edu</p>
        <h3>Find Us on Map</h3>
        <p>you can embed a Google map here later using an iframe or react map library.</p>
        < a href="https://www.google.com/maps/search/Vivekanand+College/@16.7013678,73.9577377,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D">View us on map
</a>
 </div>
    </div>
  );
};

export default ContactPage;
