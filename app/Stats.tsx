// app/Stats.tsx
import { getServerClient, getWeaviateStats } from '../lib/weaviate-client';

interface StatsProps {
  clientId: string;
}

const Stats: React.FC<StatsProps> = ({ clientId }) => {
  const client = getServerClient(clientId);
  const stats = getWeaviateStats(client);

  return (
    <div>
      {stats ? (
        <pre>{JSON.stringify(stats, null, 2)}</pre>
      ) : (
        <p>Loading Weaviate stats...</p>
      )}
    </div>
  );
};

export default Stats;