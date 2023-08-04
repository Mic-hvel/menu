import React from "react";


export default function Recipe({ recipes, children }) {
  return (  
    <div key={recipes.id} className="recipe" tabIndex={0}>
      <span className="recipe-container">
        <h3 className="recipe-name">{recipes.name}</h3>
        <div className="image-container">
          <img src={require(`../img/${recipes.imageUrl}`)} alt="" className="recipe-image" />
        </div>
      </span>
      {children}
    </div>
  );
}
