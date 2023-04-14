// lib/weaviate-client.ts
import weaviate, { Creator, Properties } from 'weaviate-ts-client';

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

class WeaviateCreatorWrapper {
  private creator?: Creator;

  setCreator(creator: Creator) {
    this.creator = creator;
  }

  async getWeaviateStats(
    client: ReturnType<typeof getServerClient>,
    className: string,
    properties: Properties,
  ) {
    if (!this.creator) {
      throw new Error('Creator is not set');
    }

    // Start the embedded Weaviate server
    await client.embedded?.start();

    // Configure the creator with the given className and properties
    this.creator.withClassName(className).withProperties(properties);

    // Fetch data from Weaviate and calculate stats
    const result = await this.creator.do();

    // Stop the embedded Weaviate server
    await client.embedded?.stop();

    return result;
  }
}