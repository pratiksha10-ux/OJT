// import React from 'react';

// const HomePage=()=> {
//   return (
//     <div>
//       <h1>Welcome to VCK Codewonders</h1>
//       <p>Vivekanand College is a premier educational institution dedicated to foresting academic excellence,
//         innovation,and holistic development.Established in [1980],we have proudly served generations of students,empowering them to achieve their full potential.
//       </p>
//       <p>At Vivekanand college,we believein a vibrant learning environment that extends beyond textbooks.Our state-of-the-art facilities,expirenced faculty,and diverse 
//         student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
//       </p>
//       <h2>Why choose Vivekanand College</h2>
//       <ul>
//         <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
//         <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
//         <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
//         <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
//         <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
//       </ul>
//       <h3>Campus Life and Facilities</h3>
//       <img src="vck.jpg"></img>
//       <img src="logs.jpg"></img>
//       <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning</p>
//       <button>Explore Courses</button>
//     </div>
//   );
// }

// export default HomePage;
import React from 'react';
const HomePage = () => {
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
        <div className="overlay" style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px'}}>
          <h1>Welcome to Vivekanand College!</h1>
          <p>Your journey to excellence starts here.</p>
          <button className="apply-btn">Apply Now!</button>
        </div>
      <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence,
        innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.
      </p>
      <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse 
        student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
      </p>
      <h2>Why choose Vivekanand College</h2>
      <ul>
        <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
        <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
        <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
        <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
        <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
      </ul>
      <h3>Campus Life and Facilities</h3>
      <img src="vck.jpg" alt="VCK Campus" />
      <img src="logs.jpg" alt="VCK Logo" />
      <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning.</p>
      <button>Explore Courses</button>
    </div>
    </div>
  );
};

export default HomePage;
