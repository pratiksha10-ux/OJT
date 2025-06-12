import React from 'react'
const AboutPage=()=>{
  return(
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
      <h1>About Vivekanand College</h1>
      <p>Vivekanand college stands as a beacon of knowledge and intigrity,committed to delivering
        transforming education since its inception in[1980].Located in the bustling heart of
        [City/Area,chembur],our college has consistently strived to uphold the highest standard
        of ethical values.</p>
        <p>our vision is to empower students with critical thinking skills,a global perspective,and a 
          strong sense of social responsibilities.
        </p>
        <h2>Our Mission</h2>
        <ul>
          <li>To provide high quality education across various descipline</li>
          <li>To foster research,innovation and creativity among students</li>
          <li>To cultivate a diverse and inclusive learning environment</li>
          <li>To install strong ethical values and leadership qualities</li>
        </ul>
        <h3>our values</h3>
        <p>Intigrity,Excellence,innovation,community and respect are the pillers upon which vivekanand college is built.
          we encourage open dialogue,intellectual curiosity.
        </p>
        <h4>Our History</h4>
        <p>Our journey began with a vision to make quality education available to all,and we all continue that legacy today. </p>
    </div>
    </div>
  )
}
export default AboutPage;