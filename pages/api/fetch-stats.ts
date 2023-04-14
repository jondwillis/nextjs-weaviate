// pages/api/fetch-stats.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerClient, getWeaviateStats } from '../../lib/weaviate-client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientId = req.query.clientId as string;
  const client = getServerClient(clientId);
  const stats = await getWeaviateStats(client);

  res.status(200).json(stats);
}