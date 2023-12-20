import { Box, Flex, Heading } from "@chakra-ui/react";
import Card, { CardProps } from "../Card/Card";

interface CarouselProps {
  title: string;
  cards: CardProps[];
}

export default function Carousel({ title, cards }: CarouselProps) {
  return (
    <Flex direction="column">
      <Heading>{title}</Heading>
      <Flex>
        {cards.map((card: CardProps) => (
          <Card
            key={card.title}
            title={card.title}
            image={card.image}
            alt={card.alt}
            link={card.link}
          />
        ))}
      </Flex>
    </Flex>
  );
}