import React from "react";
import "../Card/cards2.css";
import "../Card/cards.css";

const Cards = ({ fruits, value }) => {
    return (
        <div className="card-grid">
            {fruits
        .filter((fruit) => {
          return fruit.name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
        })
        .map((fruit) => (
            <section className="product card" key={fruit.id}>
                <div className="product__photo">
		            
                    <div className="photo-container">
			            <div className="photo-main">
				            <img src={fruit.img} alt="fruits"/>
			            </div>
			            
		            </div>
	            </div>
	        <div className="product__info">
                <div className="title">
                    <h1>{fruit.name}</h1>
                </div>
    
                <div className="description">
                    <h3>BENEFITS</h3>
                    <ul>
                        <li>PROTEIN: {fruit.nutritions.protein} g</li>
                        <li>FAT: {fruit.nutritions.fat} g</li>
                        <li>CALORIES: {fruit.nutritions.calories} g</li>
                        <li>SUGAR: {fruit.nutritions.sugar} g</li>
                    </ul>
                </div>

	            </div>
            </section>
        ))}
            
        </div>
    );
  };
  export default Cards;
  