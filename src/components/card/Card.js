import React from 'react'
import {categories} from "../../helper/data"
import "./Card.css"

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <img src={categories[0].img} alt="" className="card-img" />
                    <h5 className="card-title">{categories[0].name}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={categories[1].img} alt="" className="card-img" />
                    <h5 className="card-title">{categories[1].name}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={categories[2].img} alt="" className="card-img" />
                    <h5 className="card-title">{categories[2].name}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={categories[3].img} alt="" className="card-img" />
                    <h5 className="card-title">{categories[3].name}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={categories[4].img} alt="" className="card-img" />
                    <h5 className="card-title">{categories[4].name}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={categories[5].img} alt="" className="card-img" />
                    <h5 className="card-title">{categories[5].name}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={categories[6].img} alt="" className="card-img" />
                    <h5 className="card-title">{categories[6].name}</h5>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <img src={categories[7].img} alt="" className="card-img" />
                    <h5 className="card-title">{categories[7].name}</h5>
                </div>
            </div>
        </div>
    )
}

export default Card
