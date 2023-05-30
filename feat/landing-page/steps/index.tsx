import {
  Box,
  Card,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function Steps() {
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const stepsArr = [
    {
      imageSrc: "/images/early_adopter.svg",
      title: "Early Adopter",
      content:
        "Early bird users can get a free ATG Pass NFT by completing tasks like liking/retweeting Twitter, joining social media, etc.",
    },
    {
      imageSrc: "/images/minter.svg",
      title: "Minter",
      content:
        "Minting an ATG Pass NFT requires ATG tokens in the second stage. Each user will be able to mint one NFT at a time. Each batch will mint fewer NFTs; meanwhile, the mint price will be in contrast.",
    },
    {
      imageSrc: "/images/trade.svg",
      title: "Trade",
      content:
        "ATG Pass NFTs can be traded on secondary NFT Marketplaces like Opensea.",
    },
  ];

  return (
    <Box sx={{ py: isMobile ? "56px" : "140px" }}>
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            width: isTablet ? "100%" : "50%",
            margin: "auto",
            mb: isTablet ? 7 : 10,
          }}
        >
          ATG Pass NFT is the Passport to join All Things Green programs.
        </Typography>

        <Stack
          direction={isTablet ? "column" : "row"}
          justifyContent={!isTablet && "space-between"}
          alignItems={isTablet && "center"}
          gap={isTablet && 6}
          flexWrap="wrap"
        >
          {stepsArr.map(({ imageSrc, title, content }, index) => (
            <Card
              key={index}
              sx={{
                width: isMobile ? "100%" : isTablet ? "70%" : "333px",
                height: isTablet ? "unset" : "496px",
                textAlign: "center",
                background: "transparent",
                boxShadow: "unset",
              }}
            >
              <Image src={imageSrc} width={236} height={248} alt="image" />
              <Box>
                <Typography
                  variant="h3"
                  sx={{ mt: 6, mb: 4, color: "#212121" }}
                >
                  {title}
                </Typography>
                <Typography variant="body1" sx={{ color: "#424242" }}>
                  {content}
                </Typography>
              </Box>
              {isTablet && (
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#408A5E",
                  }}
                >
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      border: "1px solid #408A5E",
                      borderRadius: "40px",
                      mb: 1,
                    }}
                  />
                  <Typography variant="body1">Step {index + 1}</Typography>
                </Box>
              )}
            </Card>
          ))}
        </Stack>

        {!isTablet && (
          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Image
              src="/images/steps.svg"
              width={955}
              height={128}
              alt="steps"
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Steps;
