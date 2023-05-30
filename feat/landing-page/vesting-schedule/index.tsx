import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

function VestingSchedule() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box sx={{ background: "#E9EFE2", py: isMobile ? "56px" : "140px" }}>
      <Container>
        <Typography
          variant="h2"
          sx={{ mb: isMobile ? 3 : 5, textAlign: "center" }}
        >
          Vesting Schedule
        </Typography>
        <Image
          src="/images/vesting_schedule.svg"
          width={1320}
          height={690}
          alt="vesting schedule"
        />
      </Container>
    </Box>
  );
}

export default VestingSchedule;
