import EffectButton from "@/components/effect-button";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function GetAtg() {
  return (
    <Box
      sx={{
        backgroundImage: "url('images/bg_get_atg.svg')",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "500px",
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
          mb: 8,
          color: "#fff",
        }}
      >
        Get ATG
      </Typography>
      <Stack direction="row">
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
        <Box sx={{ width: "40px" }} />
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
