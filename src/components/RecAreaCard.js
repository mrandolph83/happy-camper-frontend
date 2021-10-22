import React from 'react'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'




const RecAreaCard = (props) => {
    
    


console.log(props)
return ( 

<>
<div className="rec-show-result-box">

<img className="rec-show-pic" src={props.recArea.attributes.images} width="350px" alt="Image not available" />
<h1 className="rec-show-attributes">{props.recArea.attributes.name}</h1>
<h4>Activities:</h4>
<p>{props.recArea.attributes.activities}</p>
<p> <a href={`https://www.google.com/maps/dir//'${props.recArea.attributes.latitude},${props.recArea.attributes.longitude}'`} target="_blank">Get Directions</a></p>


<p>{props.recArea.attributes.description}</p>




</div>
{/* end of box */}



</>


)}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps)(RecAreaCard)