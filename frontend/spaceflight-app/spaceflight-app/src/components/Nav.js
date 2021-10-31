import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul>
                <Link to='/articles'>
                    <li>List of news</li>
                </Link>
            </ul>
        </div>
    );
};

export default Nav;
