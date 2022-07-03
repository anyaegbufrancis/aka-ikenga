import React from 'react';
import { Nav } from 'react-bootstrap';

const MainNav = () => {
    
    return (
        <>
            <Nav.Link to="/" className="active">Home</Nav.Link>
            <Nav.Link to="/profile" className="active">Profile</Nav.Link>
            <Nav.Link to="/others" className="active">Others</Nav.Link>
        </>
    );
}

export default MainNav;