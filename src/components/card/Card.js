import React from 'react'
import {categories} from "../../helper/data"

const Card = () => {
    return (
        <div>
            <div className="card w-25">
                <div className="card-body">
                    <img src={categories[0].img} alt="" className="card-img-top" />
                    <h5 className="card-title">{categories[0].name}</h5>
                </div>
            </div>
        </div>
    )
}

export default Card
