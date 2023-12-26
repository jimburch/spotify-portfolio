import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_API_TOKEN as string,
});

export default async function fetchContentfulEntry(
  entryId: string,
): Promise<any> {
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
