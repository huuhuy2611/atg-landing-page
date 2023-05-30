import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function Footer() {
  const theme = useTheme();
  const isDownMd = useMediaQuery("(max-width: 900px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const logosArr = [
    {
      imageSrc: "/images/facebook_icon.svg",
      link: "Facebook link",
    },
    {
      imageSrc: "/images/twitter_icon.svg",
      link: "twitter link",
    },
    {
      imageSrc: "/images/youtube_icon.svg",
      link: "youtube link",
    },
    {
      imageSrc: "/images/telegram_icon.svg",
      link: "telegram link",
    },
    {
      imageSrc: "/images/reddit_icon.svg",
      link: "reddit link",
    },
    {
      imageSrc: "/images/discord_icon.svg",
      link: "discord link",
    },
  ];

  const sectionArr = [
    {
      title: "Company",
      items: [
        {
          content: "About us",
          slug: "About us slug",
        },
      ],
    },
    {
      title: "Legal",
      items: [
        {
          content: "Team & Conditions",
          slug: "Team & Conditions slug",
        },
        {
          content: "Privacy Policy",
          slug: "Privacy Policy slug",
        },
      ],
    },
    {
      title: "Quick Links",
      items: [
        {
          content: "Docs",
          slug: "Docs slug",
        },
        {
          content: "Smart Contract",
          slug: "Smart Contract slug",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        background: theme.palette.primary.dark,
        py: isMobile ? "56px" : "140px",
      }}
    >
      <Container>
        <Grid container>
          <Grid item lg={6} md={5} sm={12} xs={12} sx={{ mb: isDownMd && 5 }}>
            <Image
              src="/images/logo.svg"
              width={232}
              height={30}
              alt="Logo"
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
            <Stack direction="row" gap={1} sx={{ mt: isMobile ? 4 : 6 }}>
              {logosArr.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid #ADADAD",
                    borderRadius: "48px",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    ":hover": {
                      background: "white",
                      border: "1px solid #fff",
                      cursor: "pointer",

                      "& img": {
                        filter: "brightness(0.2)",
                      },
                    },
                  }}
                  onKeyDown={() => console.log(item.link)}
                >
                  <Image
                    src={item.imageSrc}
                    width={16}
                    height={16}
                    alt="Logo"
                  />
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item lg={6} md={7} sm={12} xs={12}>
            <Grid container>
              {sectionArr.map(({ title, items }, index) => (
                <Grid
                  key={index}
                  item
                  lg={4}
                  md={4}
                  sm={4}
                  xs={12}
                  sx={{ mb: isMobile && 5 }}
                >
                  <Typography
                    variant="h4"
                    sx={{ mb: isMobile ? 1.5 : 5, color: "#fff" }}
                  >
                    {title}
                  </Typography>
                  {items.map(({ content, slug }, subIndex) => (
                    <Box key={subIndex} onClick={() => console.log(slug)}>
                      <Typography
                        variant="body1"
                        sx={{
                          mb: isMobile ? 0.5 : 2,
                          color: "#ADADAD",
                          ":hover": { cursor: "pointer" },
                        }}
                      >
                        {content}
                      </Typography>
                    </Box>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
