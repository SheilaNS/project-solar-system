import React, { Component } from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
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
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
