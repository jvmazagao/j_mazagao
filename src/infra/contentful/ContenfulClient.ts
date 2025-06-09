import { createClient } from "contentful";

export class ContentfulClient {
  private readonly client;

  constructor() {
    this.client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    });
  }

  async getEntries(contentType: string, limit: number = 1, fallback: () => unknown) {
    try {
      const entries = await this.client.getEntries({
        content_type: contentType,
        limit,
      });

      if (entries.items.length > 0) {
        return entries.items[0].fields.data;
      }

      return fallback();
    } catch (error) {
      console.error(error);

      return fallback();
    }
  }
}