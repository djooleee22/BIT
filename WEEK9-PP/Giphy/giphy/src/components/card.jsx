import React, { Component } from 'react';

const Card = (props) => {
    return <div className='card'>
        <img src={props.data.images.original.url} className='slika'></img>
    </div>
}

export default Card
