import EffectButton from "@/components/effect-button";
import {
  Box,
  Card,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function OurTeam() {
  const isTablet = useMediaQuery("(max-width: 1028px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    arrows: false,
  };

  const ourTeamArr = [
    {
      imageSrc: "/images/mem_1.svg",
      title: "Member #1",
      linkedIn: "LinkedIn Member #1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      imageSrc: "/images/mem_2.svg",
      title: "Member #2",
      linkedIn: "LinkedIn Member #2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      imageSrc: "/images/mem_3.svg",
      title: "Member #3",
      linkedIn: "LinkedIn Member #3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      imageSrc: "/images/mem_4.svg",
      title: "Member #4",
      linkedIn: "LinkedIn Member #4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
  ];

  return (
    <Container sx={{ my: isMobile ? "56px" : "140px" }}>
      <Typography
        variant="h2"
        sx={{ mb: isMobile ? 5 : 10, textAlign: "center" }}
      >
        Our Team
      </Typography>

      <Box
        sx={{
          width: {
            xl: "85vw",
            lg: "90vw",
            xs: "unset",
          },
        }}
      >
        <Slider {...settings}>
          {ourTeamArr.map(({ imageSrc, title, content, linkedIn }, index) => (
            <Box key={index} sx={{ mr: isMobile ? 2 : 3 }}>
              <Card
                sx={{
                  width: isMobile ? "253px" : isTablet ? "350px" : "424px",
                  height: isMobile ? "550px" : isTablet ? "730px" : "807px",
                  boxShadow: "unset",
                  textAlign: "center",
                }}
              >
                <Image src={imageSrc} width={424} height={551} alt="image" />
                <Box
                  sx={{
                    px: isMobile ? 0 : 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ mt: isMobile ? 3 : 5, mb: isMobile ? 2 : 3 }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ width: isMobile ? "100%" : "80%", mb: 3 }}
                  >
                    {content}
                  </Typography>
                  <EffectButton
                    icon={
                      <Image
                        src="/images/linkedin_icon.svg"
                        width={16}
                        height={16}
                        alt="image"
                      />
                    }
                    content="View on Linkedin"
                    onClick={() => console.log(linkedIn)}
                  />
                </Box>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default OurTeam;
