import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
//import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
 
    return (
        <nav> 
            <IndexLink to ="/" activeClassName="active">Home </IndexLink>
            {" | "}
            <IndexLink to ="/courses" activeClassName="active">Courses </IndexLink>
            {" | "}
            <IndexLink to ="/about" activeClassName="active">About </IndexLink>
            
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;