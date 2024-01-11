import { NavButtons } from "@/components";
import { fetchContentfulEntries } from "@/utils/contentful";
import { options } from "@/utils/richContent";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

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
    heroImage: {
      url: `https:${fields.heroImage.fields.file.url}`,
      alt: fields.heroImage.fields.title,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  return (
    <VStack px={4} spacing={{ base: 2, lg: 4 }} align="start">
      <NavButtons />
      <Box
        h={{ base: 175, lg: 350 }}
        w="full"
        overflow="hidden"
        position="relative"
      >
        <Image
          src={data.heroImage.url}
          alt={data.heroImage.url}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Heading>{data.title}</Heading>
      <VStack align="start" spacing={4}>
        {documentToReactComponents(data.description, options)}
      </VStack>
    </VStack>
  );
}
