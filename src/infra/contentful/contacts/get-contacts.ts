import { ContentfulClient } from "../ContenfulClient";

interface Contact {
  title: string;
  value: string;
}

export class GetContacts {
  private readonly client: ContentfulClient;

  constructor() {
    this.client = new ContentfulClient();
  }

  async getContacts(fallback: () => Contact[]): Promise<Contact[]> {
    const contacts = await this.client.getEntries("contact", 1, fallback);
    return contacts as unknown as Contact[];
  }
}