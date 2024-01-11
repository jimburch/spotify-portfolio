import { GAP } from "@/constants";
import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

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
      p={{ base: 2, lg: 4 }}
      w="full"
      minW={150}
      maxW={200}
      bg={{ base: "inherit", lg: "brand.gray.medium" }}
      gap={{ base: 1, lg: GAP }}
      borderRadius="md"
      sx={{
        _hover: { bg: "brand.gray.base" },
        _active: { bg: "brand.gray.soft" },
      }}
    >
      <AspectRatio ratio={1 / 1} w="full" borderRadius="md" overflow="hidden">
        <Image src={image} alt={alt} fill style={{ objectFit: "cover" }} />
      </AspectRatio>
      <Text noOfLines={1} fontWeight="bold">
        {title}
      </Text>
      <Text noOfLines={2}>{description}</Text>
    </Flex>
  );
}
