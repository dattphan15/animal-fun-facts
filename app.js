import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

// empty string evaluates to false
const title = "";

const background = (
  <img 
    className="background" 
    alt="ocean" 
    src="/images/ocean.jpg"
  />
);

const showBackground = true;

let images = [];

for (const animal in animals) {
  images.push( 
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      ariaLabel={animal}
      role='button'
      onClick={displayFact}
    />
  )
}

function displayFact(e) {
  // targets {animal} in animal image array alt
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  // generates a random index based on animal facts array length
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);

  const funFact = animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>
      {/* render left side if true, else render right side of || */}
      { title || 'Click an animal for a fun fact' }
    </h1>
    <p id="fact"></p>
    {/* if showBackground is true, render background, if false, render showBackground */}
    { showBackground && background }
    <div className="animals">
      { images }
    </div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));