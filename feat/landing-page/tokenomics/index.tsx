import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

function Tokenomics() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box sx={{ background: "#E9EFE2", pt: 5 }}>
      <Container>
        <Grid container>
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mb: isMobile && 5,
            }}
          >
            <Box sx={{ width: isMobile ? "100%" : "72%" }}>
              <Typography variant="h2" sx={{ mb: 4.75 }}>
                Tokenomics
              </Typography>
              <Typography variant="body1" sx={{ color: "#424242" }}>
                ATG token is designed to be a sustainable and valuable currency
                for the ATG platform, with a focus on ecosystem growth,
                community engagement, and environmental impact.
              </Typography>
            </Box>
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={12} sx={{ textAlign: "center" }}>
            <Image
              src={
                isMobile
                  ? "/images/tokenomics_mobile.svg"
                  : "/images/tokenomics.svg"
              }
              width={isMobile ? 343 : 644}
              height={isMobile ? 636 : 567}
              alt="tokenomics"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Tokenomics;
