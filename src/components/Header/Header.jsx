import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
    return(
             <nav style={{ background: '#333', padding: '1rem' }}>
            <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
            <Link to="/about" style={{ marginRight: '1rem', color: '#fff' }}>About</Link>
            <Link to="/admission" style={{ marginRight: '1rem', color: '#fff' }}>Admission</Link>
            <Link to="/courses" style={{ marginRight: '1rem', color: '#fff' }}>Courses</Link>
            <Link to="/contact" style={{ color: '#fff' }}>Contact</Link>
            
          <Link to="/admission">
          <button style={buttonStyle}>Apply Now!</button>
          </Link>
       
        </nav>
    );
}
const buttonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px'
};
export default Header;