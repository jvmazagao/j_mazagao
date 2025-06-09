import { ContentfulClient } from "../ContenfulClient";

export class GetContacts {
  private readonly client: ContentfulClient;

  constructor() {
    this.client = new ContentfulClient();
  }

  getContacts(fallback: () => Record<string, string>[]) {
    const contacts = this.client.getEntries("contact", 1, fallback);

    return contacts;
  }
}