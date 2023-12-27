import { GAP } from "@/constants";
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
      p={{ base: 0, lg: 4 }}
      w="full"
      minW={150}
      maxW={200}
      bg={{ base: "inherit", lg: "brand.gray.base" }}
      gap={{ base: 1, lg: GAP }}
      borderRadius="md"
    >
      <AspectRatio ratio={1 / 1} w="full" borderRadius="md" overflow="hidden">
        <Image src={image} alt={alt} objectFit="cover" />
      </AspectRatio>
      <Text noOfLines={1} fontWeight="bold">
        {title}
      </Text>
      <Text noOfLines={2}>{description}</Text>
    </Flex>
  );
}
