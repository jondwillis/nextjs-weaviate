// lib/weaviate-client.ts
import weaviate from 'weaviate-ts-client';

export function getServerClient(clientId: string) {
  return weaviate.client({
    scheme: 'http',
    host: 'localhost:6666',
    embedded: new weaviate.EmbeddedOptions({
      port: 6666,
    }),
  });
}

export async function getWeaviateStats(client: ReturnType<typeof getServerClient>) {
  // Start the embedded Weaviate server
  await client.embedded?.start();

  // Fetch data from Weaviate and calculate stats
  const result = await client.data
    .creator()
    .withClassName('Wine')
    .withProperties({
      name: 'Chardonnay',
      description: 'Goes with fish',
    })
    .do();

  // Stop the embedded Weaviate server
  await client.embedded?.stop();

  return result;
}