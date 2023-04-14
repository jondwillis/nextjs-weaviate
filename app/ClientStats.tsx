"use client";

import { useState } from 'react';

interface StatsProps {
  clientId?: string;
}

const ClientStats: React.FC<StatsProps> = ({ clientId }) => {
  const [stats, setStats] = useState(null);
  const [inputClientId, setInputClientId] = useState(clientId || '');

  const handleFetchStats = async () => {
    const response = await fetch(`/api/fetch-stats?clientId=${inputClientId}`);
    const fetchedStats = await response.json();
    setStats(fetchedStats);
  };

  const handleClientIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputClientId(event.target.value);
  };

  return (
    <div>
      {!clientId && (
        <div>
          <label htmlFor="clientId">Client ID:</label>
          <input
            type="text"
            id="clientId"
            name="clientId"
            value={inputClientId}
            onChange={handleClientIdChange}
          />
        </div>
      )}
      <button onClick={handleFetchStats}>Fetch Weaviate Stats</button>
      {stats ? (
        <pre>{JSON.stringify(stats, null, 2)}</pre>
      ) : (
        <p>No stats fetched yet.</p>
      )}
    </div>
  );
};

export default ClientStats;