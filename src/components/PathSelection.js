import React from 'react';
import { Link } from 'react-router-dom'

const PathSelection = ({}) => (
    <div>
        <h2>Choose Your Path</h2>

    <span> 
    <Link to="/discover"> DISCOVER </Link> 
    <Link to="/reviews/new"> SHARE </Link>
    <Link to="/explore"> EXPLORE</Link>
    </span>
    </div>
);

export default PathSelection