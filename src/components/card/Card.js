import React from 'react';
import { categories } from '../../helper/data';
import './Card.css';
// import { useState } from 'react'

const Card = () => {
  const listVisibility = (e) => {
    const invisImg = e.target.offsetParent.children[0].children[0];
    const invisTitle = e.target.offsetParent.children[0].children[1];
    const visList = e.target.offsetParent.children[0].children[2];

    const items = [invisImg, invisTitle, visList];

    items.forEach(element => {
        if (element.className.includes("d-none")) {
            element.classList.remove("d-none")
        } else {
            element.classList.add("d-none")
        }
    });

  };

  return (
    <div className="card-container">
      {categories.map((card) => {
        return (
          <div className="card">
            <div onClick={listVisibility} className="card-body">
              <img src={card.img} alt={card.name} className="card-img" />
              <h5 className="card-title">{card.name}</h5>
              <ul className="list d-none">
                {card.options.map((element) => {
                  return <li>{element}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
