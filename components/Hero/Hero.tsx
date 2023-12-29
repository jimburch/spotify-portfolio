import { GAP } from "@/constants";
import { fetchContentfulEntry } from "@/utils/contentful";
import { Center, Flex, Heading, Image } from "@chakra-ui/react";

export default async function Hero() {
  const data = await fetchContentfulEntry("1dvVcU18zoVYoONeXuMe9y");
  const image = data.fields.image.fields;

  return (
    <Center
      minH={{ base: 175, lg: 275 }}
      mx={{ base: 4, lg: 0 }}
      bg="brand.green"
      borderRadius="md"
      p={GAP}
    >
      <Image
        src={`https:${image.file.url}`}
        alt={image.title}
        h={{ base: 75, lg: 150 }}
        objectFit="cover"
        px={{ base: 5, lg: 0 }}
      />
      <Flex direction="column">
        <Heading as="h1" size={{ base: "lg", lg: "xl" }}>
          Jim Burch
        </Heading>
        <Heading as="h2" size={{ base: "lg", lg: "xl" }}>
          Software Engineer & Creative Pro
        </Heading>
      </Flex>
    </Center>
  );
}
