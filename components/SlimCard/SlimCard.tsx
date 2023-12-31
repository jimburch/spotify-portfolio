import {
  Box,
  Flex,
  Image,
  LinkOverlay,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { Suspense } from "react";

export interface SlimCardProps {
  image: string;
  alt: string;
  title: string;
  slug: string;
}

export default function SlimCard({ image, alt, title, slug }: SlimCardProps) {
  return (
    // <Suspense fallback={<Skeleton height={65} borderRadius="md" />}>
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
        <Box h="full" w="60px">
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
    </Link>
    // </Suspense>
  );
}
