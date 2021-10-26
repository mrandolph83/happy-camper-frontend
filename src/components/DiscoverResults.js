import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const DiscoverResults = (props) => {
    const recAreaCards = props.recAreas.length > 0 ?
    props.recAreas.map(recArea => (

    <>
    <h2 key={recArea.id}><Link to={`/rec_areas/${recArea.id}`}> {recArea.attributes.name} </Link> </h2>
    <img className="result-pic" src={recArea.attributes.images} width="400px" alt="Nature Photography" onError={(e)=>{e.target.onerror = null; e.target.src=`../images/image-alternate-pic.gif`}}/>
    <h3>{recArea.attributes.city_state}</h3>   
    <p> <a href={`https://www.google.com/maps/dir//${recArea.attributes.name}/${recArea.attributes.city_state}`} target="_blank" rel="noopener noreferrer">Directions</a></p>
    <p>{recArea.attributes.description.replace(/<[^>]+>/g, '')}</p>
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