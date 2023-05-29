import EffectButton from "@/components/effect-button";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";

function Header(props) {
  const theme = useTheme();

  const tabArr = [
    {
      content: "Home",
      slug: "/",
    },
    {
      content: "Documents",
      slug: "/docs",
    },
    {
      content: "About us",
      slug: "/about",
    },
    {
      content: "FAQs",
      slug: "/faq",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        backgroundImage: "url('images/image_header.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        height: "980px",
        pt: 3,
      }}
    >
      <Container
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            background: "#fff",
            borderRadius: "80px",
            height: "100px",
            py: 4,
            px: 6,
            display: "flex",
            justifyContent: "space-between",
            mb: 8,
          }}
        >
          <Image src="/images/logo.svg" width={232} height={30} alt="Logo" />
          <Stack gap={5} direction="row">
            {tabArr.map((item, index) => (
              <Button
                key={index}
                onClick={() => console.log(item.slug)}
                sx={{ p: 0 }}
              >
                {item.content}
              </Button>
            ))}
          </Stack>
        </Box>
        <Grid container sx={{ flex: 1 }}>
          <Grid item xs={6} lg={6} md={6} sm={6} sx={{ position: "relative" }}>
            <Typography variant="h1" sx={{ mb: 9 }}>
              “Every transaction is giving a hand to protect the environment!”
            </Typography>
            <Typography variant="body1" sx={{ width: "80%", mb: 7 }}>
              All Things Green is a green platform that uses blockchain
              technology to promote environmental preservation operations.
            </Typography>
            <EffectButton
              icon={
                <Image
                  src="/images/auto_stories.svg"
                  width={24}
                  height={24}
                  alt="stories"
                />
              }
              content="Read our Docs"
            />
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                bottom: "40px",
                display: "flex",
                color: "#666666",
              }}
            >
              <MouseOutlinedIcon sx={{ mr: 0.4 }} />
              Scroll down for more details
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
