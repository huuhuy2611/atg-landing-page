import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function VestingSchedule() {
  return (
    <Box sx={{ background: "#E9EFE2", py: "140px" }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 5, textAlign: "center" }}>
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
