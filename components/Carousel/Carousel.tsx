import { Flex, Heading } from "@chakra-ui/react";
import Card, { CardProps } from "../Card/Card";
import { hiddenScrollbar } from "@/constants";

interface CarouselProps {
  title: string;
  cards: CardProps[];
}

export default function Carousel({ title, cards }: CarouselProps) {
  return (
    <Flex direction="column" gap={4}>
      <Heading>{title}</Heading>
      <Flex
        gap={4}
        overflowX={{ base: "auto", lg: "inherit" }}
        sx={hiddenScrollbar}
      >
        {cards.map((card: CardProps) => (
          <Card
            key={card.title}
            image={card.image}
            alt={card.alt}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </Flex>
    </Flex>
  );
}
