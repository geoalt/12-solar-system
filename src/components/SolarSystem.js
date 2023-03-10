import React from 'react';
import planets from '../data/planets';
import Title from './Title';
import PlanetCard from './PlanetCard';
import '../App.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />

        <div className="planets-container">
          { planets.map(({ name, image }, index) => (<PlanetCard
            key={ index }
            planetName={ name }
            planetImage={ image }
          />)) }
        </div>

      </div>
    );
  }
}

export default SolarSystem;
