import { Box, Card, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Steps(props) {
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
    <Box sx={{ py: "140px" }}>
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            width: "50%",
            margin: "auto",
            mb: 10,
          }}
        >
          ATG Pass NFT is the Passport to join All Things Green programs.
        </Typography>

        <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
          {stepsArr.map(({ imageSrc, title, content }, index) => (
            <Card
              key={index}
              sx={{
                width: index === 1 ? "323px" : "333px",
                height: "496px",
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
            </Card>
          ))}
        </Stack>

        <Box sx={{ textAlign: "center" }}>
          <Image src="/images/steps.svg" width={955} height={128} alt="steps" />
        </Box>
      </Container>
    </Box>
  );
}

export default Steps;
