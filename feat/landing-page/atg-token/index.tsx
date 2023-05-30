import { TabContext, TabList } from "@mui/lab";
import {
  Container,
  Grid,
  Typography,
  Box,
  Tab,
  useMediaQuery,
  Stack,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function AtgToken() {
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const tabArr = [
    {
      title: "Staking",
      imageSrc: "/images/atg_token_staking.svg",
      content:
        "Users can stake their tokens to earn rewards and to have the right to participate in All Things Green activities like Learn to Earn or other campaigns.",
    },
    {
      title: "Burning",
      imageSrc: "/images/atg_token_burning.svg",
      content:
        "1% of ATG tokens will be burned for each transaction. Each minted ATG Pass will also burn a certain amount of ATG tokens. This burning mechanism keeps the circulating supply inflation under control.",
    },
    {
      title: "Taxation",
      imageSrc: "/images/atg_token_taxation.svg",
      content:
        "Buying tax and selling tax will be fixed at 3% and 5% respectively. 30% of taxes will partly be transferred into the environmental protection fund. Another 30% will be rewarded to ATG holders.",
    },
    {
      title: "Payment",
      imageSrc: "/images/atg_token_payment.svg",
      content:
        "ATG token will be the main currency on our marketplace to pay for products and services. A part of profit from the marketplace will be used for environmental protection programs as we committed.",
    },
  ];

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ background: "#E9EFE2", py: isTablet ? "56px" : "140px" }}>
      <Container>
        <Typography variant="h2" sx={{ mb: 10, textAlign: "center" }}>
          ATG Token
        </Typography>

        {isTablet ? (
          <Stack
            gap={5}
            direction="row"
            flexWrap="wrap"
            justifyContent="space-evenly"
          >
            {tabArr.map(({ title, content, imageSrc }, index) => (
              <Stack key={index} gap={3} sx={{ width: "343px" }}>
                <Image
                  src={imageSrc}
                  width={343}
                  height={444}
                  alt="ATG token"
                />
                <Box
                  sx={{
                    textAlign: "start",
                    color: "#212121",

                    "& .MuiTypography-body1": {
                      color: "#424242",
                    },
                  }}
                >
                  <Typography variant="h3" sx={{ mb: 2 }}>
                    {title}
                  </Typography>
                  <Typography variant="body1">{content}</Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        ) : (
          <Grid container spacing={isMobile && 4}>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={tabArr[value].imageSrc}
                width={isMobile ? 343 : 648}
                height={isMobile ? 444 : 840}
                alt="ATG token"
              />
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12}>
              <Box
                sx={{
                  ml: !isMobile && 17,

                  "& .MuiTab-root": {
                    color: "#999999",
                    p: isMobile ? 2 : 4,

                    "&.Mui-selected": {
                      background: "#fff",
                      color: "#212121",
                      boxShadow: "0px 4px 28px -8px rgba(0, 0, 0, 0.05)",
                      borderRadius: isMobile ? "32px" : "40px",

                      "& .MuiTypography-body1": {
                        color: "#424242",
                      },
                    },
                  },
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                }}
              >
                <TabContext value={value}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    orientation="vertical"
                  >
                    {tabArr.map(({ title, content }, index) => (
                      <Tab
                        key={index}
                        label={
                          <Box sx={{ textAlign: "start" }}>
                            <Typography variant="h3" sx={{ mb: 2 }}>
                              {title}
                            </Typography>
                            <Typography variant="body1">{content}</Typography>
                          </Box>
                        }
                        value={`${index}`}
                        sx={{ maxWidth: "unset" }}
                      />
                    ))}
                  </TabList>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}

export default AtgToken;
