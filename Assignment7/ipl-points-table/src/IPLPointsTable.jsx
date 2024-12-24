import React, { useEffect, useState } from 'react';

const IPLPointsTable = () => {
  const [teams, setTeams] = useState([]);

  // Fetch data from API and sort by NRR
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>IPL Season 2022 Points Table</h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse', // Remove space between cells
          border: '1px solid black', // Add border around the table
        }}
       >
        <thead>
          <tr>
            <th style={{ border: 'none', textAlign: 'left', verticalAlign: 'middle' }}>No</th>
            <th style={{ border: 'none', textAlign: 'center', verticalAlign: 'middle' }}>Team</th>
            <th style={{ border: 'none', textAlign: 'left', verticalAlign: 'middle' }}>Matches</th>
            <th style={{ border: 'none', textAlign: 'left', verticalAlign: 'middle' }}>Won</th>
            <th style={{ border: 'none', textAlign: 'left', verticalAlign: 'middle' }}>Lost</th>
            <th style={{ border: 'none', textAlign: 'left', verticalAlign: 'middle' }}>Tied</th>
            <th style={{ border: 'none', textAlign: 'left', verticalAlign: 'middle' }}>NRR</th>
            <th style={{ border: 'none', textAlign: 'left', verticalAlign: 'middle' }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team.No}>
              <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{team.No}</td>
              <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{team.Team}</td>
              <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{team.Matches}</td>
              <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{team.Won}</td>
              <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{team.Lost}</td>
              <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{team.Tied}</td>
              <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{team.NRR}</td>
              <td style={{ textAlign: 'left', verticalAlign: 'middle' }}>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPLPointsTable;
