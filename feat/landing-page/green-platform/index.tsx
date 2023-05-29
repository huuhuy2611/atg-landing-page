import Image from "next/image";
import React from "react";
import {
  Box,
  Card,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";

function GreenPlatform(props) {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
  ];

  return (
    <Container sx={{ py: "140px" }}>
      <Typography variant="h2" sx={{ mb: 10 }}>
        All Things Green Platform
      </Typography>
      <Box
        sx={{
          "& .slick-dots": {
            bottom: "-50px",
          },
        }}
      >
        <Slider {...settings}>
          {cardArr.map(
            ({ imageSrc, title, content, background, color }, index) => (
              <Box key={index}>
                <Card
                  sx={{
                    borderRadius: "40px",
                    background: background || theme.palette.primary.main,
                    color: color || "#000",
                    width: "536px",
                    height: "773px",
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
