import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import { Suspense } from "react";

export interface SlimCardProps {
  image: string;
  alt: string;
  title: string;
  link: string;
}

export default function SlimCard({ image, alt, title, link }: SlimCardProps) {
  return (
    <Suspense fallback={<Skeleton height={65} borderRadius="md" />}>
      <Flex
        h={65}
        overflow="hidden"
        borderRadius="md"
        bg="brand.gray.base"
        align="center"
      >
        <Box h="full" w={65}>
          <Image
            src={image}
            alt={alt}
            h="full"
            objectFit="cover"
            bg="brand.gray.light"
          />
        </Box>
        <Text p={4} fontWeight="bold">
          {title}
        </Text>
      </Flex>
    </Suspense>
  );
}
