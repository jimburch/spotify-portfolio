import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_API_TOKEN as string,
});

export async function fetchContentfulEntry(entryId: string): Promise<any> {
  try {
    const entry = await client.getEntry(entryId);
    if (!entry) {
      throw new Error("No entry found");
    }
    return entry;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchContentfulEntries(
  contentType: string,
  field?: string,
  value?: string,
): Promise<any> {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      ...(field && value && { [`fields.${field}`]: value }),
    });
    if (!entries) {
      throw new Error("No entries found");
    }
    return entries;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
