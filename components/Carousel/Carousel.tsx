import { Flex, Heading } from "@chakra-ui/react";
import Card from "../Card/Card";
import { hiddenScrollbar } from "@/constants";
import { fetchContentfulEntry } from "@/utils/contentful";

interface CarouselProps {
  title: string;
  entryId: string;
}

export default async function Carousel({ title, entryId }: CarouselProps) {
  const data = await fetchContentfulEntry(entryId);
  const cards = data.fields.cards;

  return (
    <Flex direction="column" gap={4}>
      <Heading mx={{ base: 4, lg: 0 }}>{title}</Heading>
      <Flex
        gap={{ base: 2, lg: 4 }}
        overflowX={{ base: "auto", lg: "inherit" }}
        sx={hiddenScrollbar}
        pl={{ base: 4, lg: 0 }}
      >
        {cards.map((card: any, i: number) => {
          const cardFields = card.fields;
          return (
            <Card
              key={i}
              image={`https:${cardFields.image.fields.file.url}`}
              alt={cardFields.title}
              title={cardFields.title}
              description={cardFields.description}
              link={cardFields.link}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
