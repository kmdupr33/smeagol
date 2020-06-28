import React from "react";
import { Box, Loader } from "@airtable/blocks/ui";
export default function Progress() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      <Loader scale={0.5} />
    </Box>
  );
}
