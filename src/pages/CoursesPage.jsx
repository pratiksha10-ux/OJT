import React from 'react';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  return (
    <div style={{ backgroundColor: "#52c7ca", minHeight: "90vh", padding: "2rem" }}>
        <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          backgroundColor: "white",
          padding: "1rem 2rem",
          borderRadius: "8px",
          boxShadow: "0 0 5px rgba(0,0,0,0.2)",
          height: "70vh",
          overflowY: "auto",
        }}
      >
      <h1>Our Academic Programs</h1>
      <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
  <h2>Discover Campus Life</h2>
  <video controls><source src="/VCKVideo.mp4" type="video/mp4" /></video>
    <div >
      
        <h2 style={{ fontWeight: "700", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
          Undergraduate Programs (UG)
        </h2>
        <ul>
          <li>
            <strong>Bachelor of Science (B.Sc.)</strong>
            <ul>
              <li>Computer Science (3 years)</li>
              <li>Information Technology (3 years)</li>
              <li>Biotechnology (3 years)</li>
            </ul>
          </li>
          <li>
            <strong>Bachelor of Commerce (B.Com)</strong>
            <ul>
              <li>Accounting & Finance (3 years)</li>
              <li>Banking & Insurance (3 years)</li>
            </ul>
          </li>
          <li>
            <strong>Bachelor of Arts (B.A.)</strong>
            <ul>
              <li>English Literature (3 years)</li>
              <li>Psychology (3 years)</li>
            </ul>
          </li>
        </ul>

        <h2 style={{ fontWeight: "700", fontSize: "1.5rem", marginTop: "2rem", marginBottom: "0.75rem" }}>
          Postgraduate Programs (PG)
        </h2>
        <ul>
          <li>
            <strong>Master of Science (M.Sc.)</strong>
            <ul>
              <li>Computer Science (2 years)</li>
              <li>Information Technology (2 years)</li>
            </ul>
          </li>
          <li>
            <strong>Master of Commerce (M.Com)</strong> (2 years)
          </li>
          <li>
            <strong>Master of Arts (M.A.)</strong> (2 years)
          </li>
        </ul>

        <div style={{  padding: '40px 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Program Details & Fee Structure (Annual)</h2>
        
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={thStyle}>Program Type</th>
              <th style={thStyle}>Course Name</th>
              <th style={thStyle}>Duration</th>
              <th style={thStyle}>Annual Fee (INR)</th>
              <th style={thStyle}>Eligibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>UG</td>
              <td style={tdStyle}>B.Sc. Computer Science</td>
              <td style={tdStyle}>3 Years</td>
              <td style={tdStyle}>₹ 85,000</td>
              <td style={tdStyle}>10+2 with PCM (50%)</td>
            </tr>
            <tr>
              <td style={tdStyle}>UG</td>
              <td style={tdStyle}>B.Com. Accounting & Finance</td>
              <td style={tdStyle}>3 Years</td>
              <td style={tdStyle}>₹ 70,000</td>
              <td style={tdStyle}>10+2 Commerce (45%)</td>
            </tr>
            <tr>
              <td style={tdStyle}>PG</td>
              <td style={tdStyle}>M.Sc. Information Technology</td>
              <td style={tdStyle}>2 Years</td>
              <td style={tdStyle}>₹ 95,000</td>
              <td style={tdStyle}>B.Sc. IT/CS (50%)</td>
            </tr>
          </tbody>
        </table>

        {/* Specialized & Vocational Courses */}
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: '40px', marginBottom: '10px' }}>Specialized & Vocational Courses</h2>
        <p style={{ color: '#555', marginBottom: '20px' }}>
          In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.
        </p>

        {/* Inquiry Button */}
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>
          <strong>Have questions about a specific course?</strong>
        </p>
        <div style={{ textAlign: 'center' }}>
  <Link to="/contact">
    <button style={buttonStyle}>Inquire About Courses</button>
  </Link>
</div>

      </div>
    </div>

      </div>
    </div>
      </div>
  );
};
// Styles
const thStyle = {
  borderBottom: '2px solid #ccc',
  padding: '12px',
  textAlign: 'left',
  backgroundColor: '#f7f7f7',
  fontWeight: 'bold'
};

const tdStyle = {
  borderBottom: '1px solid #ddd',
  padding: '12px',
  textAlign: 'left'
};

const buttonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px'
};
export default CoursesPage;
