import { Flex, Heading, Link } from "@chakra-ui/react";
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
            <Link href={`/experience/${cardFields.slug}`} key={i}>
              <Card
                image={`https:${cardFields.image.fields.file.url}`}
                alt={cardFields.title}
                title={cardFields.title}
                description={cardFields.description}
                link={cardFields.link}
              />
            </Link>
          );
        })}
      </Flex>
    </Flex>
  );
}
