import React from 'react';
import Navber from '../Component/Navber/Navber';
import HomePage from '../Pages/HomePage';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <HomePage></HomePage>
        </div>
    );
};

export default MainLayout;