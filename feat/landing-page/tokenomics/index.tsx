import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Tokenomics() {
  return (
    <Box sx={{ background: "#E9EFE2", pt: 5 }}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={6}
            lg={6}
            md={6}
            sm={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "72%" }}>
              <Typography variant="h2" sx={{ mb: 4.75 }}>
                Tokenomics
              </Typography>
              <Typography variant="body1" sx={{ color: "#424242" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} lg={6} md={6} sm={6}>
            <Image
              src="/images/tokenomics.svg"
              width={644}
              height={567}
              alt="tokenomics"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Tokenomics;
