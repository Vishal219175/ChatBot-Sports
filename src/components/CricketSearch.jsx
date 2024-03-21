// CricketSearch.jsx
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './Dropdown.css';

const CricketSearch = ({ actionProvider }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [teamOptions, setTeamOptions] = useState([]);
  const [playerOptions, setPlayerOptions] = useState([]);

  useEffect(() => {
    const cricketDataFromStorage = localStorage.getItem('CricketData');
    if (cricketDataFromStorage) {
      const parsedData = JSON.parse(cricketDataFromStorage);
      if (Array.isArray(parsedData)) {
        setTeamOptions(parsedData);
        setLoading(false);
      } else {
        console.error('Invalid format in localStorage');
      }
    } else {
      const sampleCricketData = [
        { value: 'RCB', label: 'RCB', players: ['Kohli', 'ABD', 'Chahal'] },
        { value: 'CSK', label: 'CSK', players: ['Dhoni', 'Raina', 'Jadeja'] },
        { value: 'DC', label: 'DC', players: ['Warner', 'Pant', 'Shaw'] },
        { value: 'Mi', label: 'Mi', players: ['Rohit', 'Bumrah', 'Pollard'] },
        { value: 'SRH', label: 'SRH', players: ['Markaram', 'Cummins', 'Sandeep'] },
      ];
      setTeamOptions(sampleCricketData);
      localStorage.setItem('CricketData', JSON.stringify(sampleCricketData));
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selectedTeam && Array.isArray(selectedTeam.players)) {
      setPlayerOptions(selectedTeam.players.map(player => ({ value: player, label: player })));
    } else {
      setPlayerOptions([]);
    }
  }, [selectedTeam]);

  const handleTeamChange = (selectedTeam) => {
    setSelectedTeam(selectedTeam);
  };

  const handlePlayerChange = (selectedPlayer) => {
    setSelectedPlayer(selectedPlayer);
    actionProvider.handleCricketSearchResponse(selectedPlayer.value);
  };

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="team-dropdown" className="left-label">Select a cricket team:</label>
              <Select
                id="team-dropdown"
                options={teamOptions}
                value={selectedTeam}
                onChange={handleTeamChange}
                placeholder="Select a team..."
                className="select-box"
              />
            </div>
          </div>
          {selectedTeam && (
            <div className="row mt-3">
              <div className="col-md-6">
                <label htmlFor="player-dropdown" className="left-label">Select a player:</label>
                <Select
                  id="player-dropdown"
                  options={playerOptions}
                  value={selectedPlayer}
                  onChange={handlePlayerChange}
                  placeholder="Select a player..."
                  className="select-box"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CricketSearch;
