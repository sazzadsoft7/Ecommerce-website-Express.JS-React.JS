import React from 'react';
import AppNavbar from './appNavbar.jsx';
import Footer from './footer.jsx';

const Layout = ({ children }) => {
    return (
        <>
            <AppNavbar />
            {children}  {/* This ensures the main content is displayed */}
            <Footer />
        </>
    );
};

export default Layout;
