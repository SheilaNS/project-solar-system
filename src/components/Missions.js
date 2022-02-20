import React, { Component } from 'react';
import missions from '../data/missions';
import Title from './Title';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <div className="title">
          <Title headline="Missões" />
        </div>
        <div className="mission-cards">
          {missions.map((mission, index) => (
            <div className="missions-card" key={ index }>
              <p>{mission.name}</p>
              <p>{mission.year}</p>
              <p>{mission.country}</p>
              <p>{mission.destination}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
