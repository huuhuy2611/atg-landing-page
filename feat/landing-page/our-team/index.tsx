import EffectButton from "@/components/effect-button";
import { Box, Card, Container, Typography, useMediaQuery } from "@mui/material";
import useScreenSize from "hooks/use-screen-size";
import Image from "next/image";
import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

function OurTeam() {
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { width: screenWidth } = useScreenSize();
  const panels = useRef([]);
  const panelsContainer = useRef(null);

  const marginContainer = useMemo(
    () => (isTablet ? 24 : (screenWidth - 1200) / 2),
    [isTablet, screenWidth]
  );

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;
    if (!totalPanels || !screenWidth) return;

    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - (isMobile ? 0.8 : isTablet ? 1 : 2)),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        markers: false,
        scrub: 0.1,
        end: "+=3000 bottom",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth]);

  return (
    <Box sx={{ py: isMobile ? "56px" : "140px" }}>
      <Container>
        <Typography
          variant="h2"
          sx={{ mb: !isMobile && 4, textAlign: "center" }}
        >
          Our Team
        </Typography>
      </Container>

      <Box
        sx={{
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
          }}
          ref={panelsContainer}
        >
          <Box
            sx={{
              mr: `${marginContainer}px`,
            }}
          />
          {ourTeamArr.map(({ imageSrc, title, content, linkedIn }, index) => (
            <Box
              key={index}
              sx={{ mr: isMobile ? 2 : 3, mt: 6 }}
              ref={(e) => createPanelsRefs(e, index)}
            >
              <Card
                sx={{
                  width: isMobile ? "253px" : isTablet ? "350px" : "424px",
                  height: isMobile ? "570px" : isTablet ? "730px" : "807px",
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
        </Box>
      </Box>
    </Box>
  );
}

export default OurTeam;
