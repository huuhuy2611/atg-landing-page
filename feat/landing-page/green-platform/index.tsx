import Image from "next/image";
import React from "react";
import {
  Box,
  Card,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";

function GreenPlatform() {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    arrows: false,
  };

  const cardArr = [
    {
      imageSrc: "/images/marketplace.svg",
      title: "Marketplace",
      content:
        "The marketplace allows users to buy eco-friendly products with cryptocurrencies or vouchers. We support our partners by initializing community programs and offsetting carbon emissions through verified Carbon Credits.",
      background: "#C7D8B7",
      color: "#000",
    },
    {
      imageSrc: "/images/green_campaigns.svg",
      title: "Green Campaigns",
      content:
        "Through campaigns and rewards, All Things Green will educate the next generation about the environment. We also promise to deduct a portion of our profits to plant more trees, focus on deforestation areas, and host outdoor events.",
      background: "#244F06",
      color: "#fff",
    },
    {
      imageSrc: "/images/education_hub.svg",
      title: "Education Hub",
      content:
        "All Things Green will reward ATG tokens to those who learn about environmental conservation and engage in physical activities. We will also hold contests and activities to encourage a green lifestyle, with winners receiving prizes.",
      background: "#A58DD7",
      color: "#fff",
    },
    {
      imageSrc: "/images/launchpad.svg",
      title: "Launchpad",
      content:
        "Launchpad will be a green project crowdfunding portal. By owning ATG Pass NFT or ATG Tokens, users can participate in our IDO program and promote creative ideas that have the potential to be the game changer for current environmental protection activities.",
      background: "#E9B255",
      color: "#fff",
    },
    {
      imageSrc: "/images/carbon_credit.svg",
      title: "Carbon Credit",
      content:
        "All Things Green will create a blockchain-based platform for trading carbon credits as tokens. This will increase liquidity, transparency, accessibility, and standardization for carbon credits, and help entrepreneurs improve their flexibility in purchasing carbon certificates to offset carbon dioxide emissions.",
      background: "#005A88",
      color: "#fff",
    },
  ];

  return (
    <Container sx={{ py: isMobile ? "56px" : "140px" }}>
      <Typography variant="h2" sx={{ mb: isMobile ? 4 : 10 }}>
        All Things Green Platform
      </Typography>
      <Box
        sx={{
          width: {
            xl: "85vw",
            lg: "90vw",
            xs: "unset",
          },
          "& .slick-dots": {
            bottom: "-50px",
          },
        }}
      >
        <Slider {...settings}>
          {cardArr.map(
            ({ imageSrc, title, content, background, color }, index) => (
              <Box key={index} sx={{ mr: isMobile ? 2 : 3 }}>
                <Card
                  sx={{
                    borderRadius: "40px",
                    background: background || theme.palette.primary.main,
                    color: color || "#000",
                    width: isMobile ? "253px" : "536px",
                    height: isMobile ? "570px" : "773px",
                  }}
                >
                  <Image src={imageSrc} width={536} height={528} alt="image" />
                  <Box sx={{ px: 3 }}>
                    <Typography variant="h3" sx={{ mt: 4, mb: 3 }}>
                      {title}
                    </Typography>
                    <Typography variant="body1">{content}</Typography>
                  </Box>
                </Card>
              </Box>
            )
          )}
        </Slider>
      </Box>
    </Container>
  );
}

export default GreenPlatform;
