import type { Metadata } from "next";
import { Providers } from "./providers";
import { Flex } from "@chakra-ui/react";
import { GAP, scrollbar } from "@/constants";
import { Footer, MobileNav, Nav } from "@/components";

export const metadata: Metadata = {
  title: "Jim Burch | Software Engineer & Creative Pro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MobileNav />
          <Flex
            as="main"
            w="full"
            h={{ base: "full", lg: "100vh" }}
            gap={GAP}
            p={{ base: 0, lg: GAP }}
          >
            <Nav />
            <Flex
              flex="3 1 75%"
              direction="column"
              minW={{ base: "none", lg: 600 }}
              minH="full"
              p={{ base: 0, lg: GAP }}
              gap={GAP}
              borderRadius={{ base: "none", lg: "md" }}
              bg="brand.gray.dark"
              overflowY="auto"
              sx={scrollbar}
            >
              <Flex
                direction="column"
                w="full"
                maxW={1500}
                p={{ base: 0, lg: GAP }}
                gap={4}
              >
                {children}
                <Footer />
              </Flex>
            </Flex>
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
