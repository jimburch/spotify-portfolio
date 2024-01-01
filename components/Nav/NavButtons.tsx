"use client";

import { Box, IconButton } from "@chakra-ui/react";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function NavButtons() {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");
  }, []);

  const goBack = () => window.history.back();

  return (
    <Box>
      <IconButton
        aria-label="nav backward"
        icon={<FontAwesomeIcon icon={faLessThan} />}
        onClick={goBack}
        isDisabled={isHomePage}
      />
      <IconButton
        aria-label="nav forward"
        icon={<FontAwesomeIcon icon={faGreaterThan} />}
        isDisabled
      />
    </Box>
  );
}
