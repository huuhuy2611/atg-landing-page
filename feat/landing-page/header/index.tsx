import EffectButton from "@/components/effect-button";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import MouseOutlinedIcon from "@mui/icons-material/MouseOutlined";
import React from "react";
import useScreenSize from "hooks/use-screen-size";

function Header() {
  const theme = useTheme();
  const isTablet = useMediaQuery("(max-width: 950px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const { width: screenWidth } = useScreenSize();

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        height: isMobile ? "unset" : "980px",
        pt: 3,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {isMobile ? (
        <Box
          sx={{
            position: "absolute",
            width: "100vw",
            height: "140vw",
            top: 0,
            right: 0,
          }}
        >
          <Image
            src={"/images/image_header_mobile.svg"}
            alt="Your Image"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      ) : (
        <Box
          sx={{
            position: "absolute",
            width: "1172px",
            height: "980px",
            top: 0,
            right: `${screenWidth > 1920 ? 0 : -((1920 - screenWidth) / 2)}px`,
          }}
        >
          <Image
            src={"/images/image_header.svg"}
            alt="Your Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </Box>
      )}

      <Container
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            background: "#fff",
            borderRadius: "80px",
            height: isTablet ? "48px" : "100px",
            py: isTablet ? 2 : 4,
            px: isTablet ? 2 : 6,
            display: "flex",
            justifyContent: "space-between",
            mb: 8,
            zIndex: 10,
          }}
        >
          <Image
            src="/images/logo.svg"
            width={isTablet ? 142 : 232}
            height={isTablet ? 18 : 30}
            alt="Logo"
          />

          {isTablet ? (
            <>
              <Button sx={{ p: 0, minWidth: "unset" }} onClick={handleClick}>
                <Image
                  src="/images/menu_icon.svg"
                  width={23}
                  height={11}
                  alt="Logo"
                />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {tabArr.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      console.log(item.slug);
                      handleClose();
                    }}
                  >
                    {item.content}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
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
          )}
        </Box>

        <Grid container sx={{ flex: 1, mt: isMobile && "115vw" }}>
          <Grid item lg={6} md={7} sm={8} xs={12} sx={{ position: "relative" }}>
            <Typography variant="h1" sx={{ mb: isMobile ? 7 : 9 }}>
              “Every transaction is giving a hand to protect the environment!”
              {/* <Image
                src="/images/scratches.svg"
                width={300}
                height={13}
                alt="scratches"
              /> */}
            </Typography>

            <Typography
              variant="body1"
              sx={{ width: "80%", mb: isMobile ? 4 : 7 }}
            >
              All Things Green is a green platform that uses blockchain
              technology to promote environmental preservation operations.
            </Typography>
            <Box sx={{ mb: isMobile && 4 }}>
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
            </Box>

            <Typography
              variant="body1"
              sx={{
                position: !isMobile && "absolute",
                bottom: "40px",
                display: "flex",
                color: "#666666",
                mb: isMobile && 2,
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
