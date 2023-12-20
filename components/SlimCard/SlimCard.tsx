import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface SlimCardProps {
  image: string;
  alt: string;
  title: string;
  link: string;
}

export default function SlimCard({ image, alt, title, link }: SlimCardProps) {
  return (
    <Flex
      h={65}
      overflow="hidden"
      borderRadius="md"
      bg="brand.gray.base"
      align="center"
    >
      <Box h="full" w={65}>
        <Image src={image} alt={alt} objectFit="cover" />
      </Box>
      <Text p={4} fontWeight="bold">
        {title}
      </Text>
    </Flex>
  );
}
