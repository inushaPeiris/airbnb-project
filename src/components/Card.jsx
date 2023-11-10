import React from 'react'
import '../styles.css';


export default function Card(props) {

    let badgeText;

    if(props.item.openSpots === 0)
        badgeText = "Sold Out"
    else if (props.item.location === "Online")
        badgeText = "Online"

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            {/* changed */}
            <img src={props.item.coverImg} className="card--image" /> 
            <div className="card--stats">
                <img src="http://drive.google.com/uc?export=view&id=18nLd4wB7mZp0q_7nFsXUryE9zRq65vqc" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}