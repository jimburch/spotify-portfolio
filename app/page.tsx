import { Carousel, Hero, NavButtons, SlimGrid } from "@/components";
import { timeOfDay } from "@/helpers/time";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Hero />
      <Heading mx={{ base: 4, lg: 0 }}>{`Good ${timeOfDay()}`}</Heading>
      <SlimGrid />
      <Carousel title="Experience" entryId="3keK3EDY9zJEEe9xC6oMLm" />
      <Carousel title="Projects" entryId="7ec6zbm4U8fPusdTSCmOML" />
    </>
  );
}
