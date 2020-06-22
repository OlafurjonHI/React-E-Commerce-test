import React from 'react';
import './homepage.styles.scss'
import MenuItem from '../../components/menu-item/menu-item.component'

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <MenuItem title="Hats" />
            <MenuItem title="Jackets" />
            <MenuItem title="Sneakers" />
            <MenuItem title="Womens" />
            <MenuItem title="Mens" />
        </div>
    </div>
);
export default HomePage;