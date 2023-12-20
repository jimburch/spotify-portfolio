import { AspectRatio, Flex, Image, Text } from "@chakra-ui/react";

export interface CardProps {
  image: string;
  alt: string;
  title: string;
  link: string;
}

export default function Card({ image, alt, title, link }: CardProps) {
  return (
    <Flex
      direction="column"
      align="center"
      p={4}
      w="full"
      maxW={275}
      bg="brand.gray.dark"
    >
      {/* <AspectRatio ratio={16 / 9}> */}
      <Image src={image} alt={alt} objectFit="cover" />
      {/* </AspectRatio> */}
      <Text fontWeight="bold">{title}</Text>
    </Flex>
  );
}
