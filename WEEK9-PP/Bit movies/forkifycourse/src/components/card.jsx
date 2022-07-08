import React from "react";

const Card = (props) => {
   
    return  <div onClick={()=>props.myFunc(props.movies)} className="card">
        <img className="card-img" src={props.movies.image?.medium ? props.movies.image.medium : props.movies.show.image?.medium} alt="unavailable"></img>
        <div className="card-text">{props.movies.name ? props.movies.name : props.movies.show.name}</div>
    </div>
    
}

export default Card;
