import { fetchContentfulEntries } from "@/utils/contentful";
import { options } from "@/utils/richContent";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getData(slug: string) {
  const data = await fetchContentfulEntries("slimCard", "slug", slug);
  const fields = data.items[0].fields;

  return {
    title: fields.title,
    slug: fields.slug,
    description: fields.description,
    image: {
      url: `https:${fields.image.fields.file.url}`,
      alt: fields.image.fields.title,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  return (
    <Box>
      <Heading mb={4}>{data.title}</Heading>
      <VStack align="start" spacing={4}>
        {documentToReactComponents(data.description, options)}
      </VStack>
    </Box>
  );
}
