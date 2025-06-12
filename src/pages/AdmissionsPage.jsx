import React from 'react';

import { Link } from 'react-router-dom';
const AdmissionsPage = () => {
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
        }}>
      <h1>Admissions at Vivekanand College</h1>
      <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.

Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>
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
    <h2>Application Process</h2>
      <ul>
        <li><strong>Online Application:</strong> Fill out the application form available on our portal.</li>
        <li><strong>Document Submission:</strong> Upload scanned copies of required documents(marksheet,id,proof).</li>
        <li><strong>Entrance Exam:</strong> Appear for the college's entrance examination.</li>
        <li><strong>Merit List & Interview:</strong>Check the merit list and attend and attend the interview if shortlisted .</li>
        <li><strong>Fee Payment:</strong>Complete the admission by paying the required fees.</li>
      </ul>
      <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, 
        please visit our <Link to="/courses">

            Courses page
        </Link> or <Link to="/contact">

            Contact us
        </Link>  directly.</p>
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

export default AdmissionsPage;
