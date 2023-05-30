import EffectButton from "@/components/effect-button";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

function GetAtg() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box
      sx={{
        backgroundImage: "url('images/bg_get_atg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        width: "100%",
        height: isMobile ? "400px" : "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          width: "50%",
          mb: isMobile ? 5 : 8,
          color: "#fff",
        }}
      >
        Get ATG
      </Typography>
      <Stack
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? 3 : 5}
        alignItems="center"
      >
        <EffectButton
          icon={
            <Image
              src="/images/tokenize_icon.svg"
              width={22}
              height={22}
              alt="image"
            />
          }
          content="Buy on Tokenize Exchange"
          btnTheme="dark"
        />
        <EffectButton
          icon={
            <Image
              src="/images/pancake_icon.svg"
              width={32}
              height={32}
              alt="image"
            />
          }
          content="Buy on PancakeSwap"
          btnTheme="dark"
        />
      </Stack>
    </Box>
  );
}

export default GetAtg;
