import React from 'react';
import RecAreaSearch from './RecAreaSearch.js'
import { withRouter } from 'react-router-dom';


const DiscoverContainer = ({}) => (

    <div>
      <img className="top-banner" src="../images/top-banner-discover.png" />
    <h2>What activities are you looking for?</h2>
    <RecAreaSearch />
    </div>
);

export default withRouter(DiscoverContainer)