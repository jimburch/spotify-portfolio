import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export interface SlimCardProps {
  image: string;
  alt: string;
  title: string;
  slug: string;
}

export default function SlimCard({ image, alt, title, slug }: SlimCardProps) {
  return (
    <Link href={`/about/${slug}`}>
      <Flex
        h="60px"
        overflow="hidden"
        borderRadius="md"
        bg="brand.gray.medium"
        align="center"
        sx={{
          _hover: { bg: "brand.gray.base" },
          _active: { bg: "brand.gray.soft" },
        }}
      >
        <Box w="60px" h="full" overflow="hidden" position="relative">
          <Image src={image} alt={alt} fill style={{ objectFit: "cover" }} />
        </Box>
        <Text p={4} fontWeight="bold">
          {title}
        </Text>
      </Flex>
    </Link>
  );
}
