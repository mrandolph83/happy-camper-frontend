import React from 'react';
import { Link } from 'react-router-dom'


const PathSelection = () => (
    <div>
        <h2><img className="user-path-sign" height="100px" src="../images/path-selection-banner.png" /></h2>


    <span> 
    <Link to="/rec_area_search"> <img className="path-sub-banners" height="300px" src="../images/discover-path.png" /> </Link> 
    <Link to="/reviews/new"> <img className="path-sub-banners" height="300px" src="../images/my-reviews-path.png" />  </Link>
    {/* <Link to="/explore"> EXPLORE</Link> */}
    </span>
    </div>
);



export default PathSelection