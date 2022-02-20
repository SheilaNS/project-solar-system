// Requisito 02 e Requisito 04
import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCards from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <div className="title">
          <Title headline="Planetas" />
        </div>
        <div className="planets">
          {planets.map((planet, index) => (<PlanetCards
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ index }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
