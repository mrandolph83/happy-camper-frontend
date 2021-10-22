import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'




const DiscoverResults = (props) => {
    
    

    const recAreaCards = props.recAreas.length > 0 ?

    
    props.recAreas.map(recArea => (
        
    <>
    <h2 key={recArea.id}><Link to={`/rec_areas/${recArea.id}`}> {recArea.attributes.name} </Link> </h2>
    <img className="result-pic" src={recArea.attributes.images} height="300px" alt="Image not available" onError={(e)=>{e.target.onerror = null; e.target.src=`../images/image-alternate-pic.gif`}}/>

    
    <h3>{recArea.attributes.city_state}</h3>
    {/* <p>{recArea.attributes.activities}</p> */}
   
    <p> <a href={`https://www.google.com/maps/dir//${recArea.attributes.name}/${recArea.attributes.city_state}`} target="_blank">Directions</a></p>
    <p>{recArea.attributes.description}</p>

    </>
    
    
    )) : ""
return recAreaCards


}

const mapStateToProps = state => {
    return {
        recAreas: state.recAreaQuery,
    }
}

export default connect(mapStateToProps)(DiscoverResults)