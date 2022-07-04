import React from 'react';
import { Nav } from 'react-bootstrap';

const MainNav = () => {
    
    return (
        <>
            <Nav.Link href="/" className="active">Home</Nav.Link>
            <Nav.Link href="/profile" className="active">Profile</Nav.Link>
            <Nav.Link href="external-api" className="active">Others</Nav.Link>
        </>
    );
}

export default MainNav;