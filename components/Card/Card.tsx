import { AspectRatio, Flex, Image, Text } from "@chakra-ui/react";

export interface CardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

export default function Card({
  image,
  alt,
  title,
  description,
  link,
}: CardProps) {
  return (
    <Flex
      direction="column"
      // align="center"
      p={4}
      w="full"
      minW={150}
      maxW={200}
      bg="red"
      gap={2}
      borderRadius="md"
    >
      <AspectRatio ratio={1 / 1} w="full" borderRadius="md" overflow="hidden">
        <Image src={image} alt={alt} objectFit="cover" />
      </AspectRatio>
      <Text fontWeight="bold">{title}</Text>
      <Text>{description}</Text>
    </Flex>
  );
}
