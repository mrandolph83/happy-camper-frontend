import React from 'react'
import { connect } from 'react-redux'
import RecAreaReviewsDisplay from './RecAreaReviewsDisplay'


const RecAreaCard = (props) => {

    let description_raw = props.recArea.attributes.description
    const decoded_description = description_raw.replace(/<[^>]+>/g, '');
    
    return ( 

        <>
        <div className="rec-show-result-box">
        <img className="rec-show-pic" src={props.recArea.attributes.images} width="400px" alt="Nature Photography" />
        <h1 className="rec-show-attributes">{props.recArea.attributes.name}</h1>
        <h4>Activities:</h4>
        <p>{props.recArea.attributes.activities}</p>
        <p> <a href={`https://www.google.com/maps/dir//${props.recArea.attributes.latitude}, ${props.recArea.attributes.longitude}`} target="_blank" rel="noopener noreferrer">Get Directions</a></p>
        <p>{decoded_description}</p>
        <div><RecAreaReviewsDisplay reviews = {props.recArea.attributes.reviews}/></div>
        </div>

        <div>
        <form onSubmit={event => {
            event.preventDefault()
        const rec_area_id = props.recArea.id
        props.history.push(`/rec_areas/${rec_area_id}/reviews/new`) 
        }}>

        <button type="submit">Click to Review</button>
        </form>
        </div>
        </>
        )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        userFavorite: state.userFavorite
    }
}

export default connect(mapStateToProps)(RecAreaCard)