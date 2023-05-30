import { Box, Button, useTheme } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";

interface IProps {
  content: string;
  icon: ReactNode;
  btnTheme?: "light" | "dark";
  onClick?: () => void;
}

function EffectButton({ content, icon, btnTheme, onClick }: IProps) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }} onClick={onClick}>
      <Box
        sx={{
          border: `1px solid ${
            btnTheme === "dark" ? "#fff" : theme.palette.primary.main
          }`,
          borderRadius: "50%",
          background: btnTheme === "dark" ? theme.palette.primary.main : "#fff",
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "-1px",
        }}
      >
        {icon}
      </Box>
      <Image
        src={
          btnTheme === "dark"
            ? "/images/road_effect_button_dark.svg"
            : "/images/road_effect_button.svg"
        }
        width={6}
        height={12}
        alt="road"
        style={{ zIndex: 1 }}
      />
      <Button
        variant="contained"
        sx={{
          p: "8px 40px",
          borderRadius: "40px",
          marginLeft: "-1px",
          background: btnTheme === "dark" ? "#fff" : theme.palette.primary.main,
          color: btnTheme === "dark" ? theme.palette.primary.main : "#fff",
          fontWeight: "500",

          "&:hover": {
            backgroundColor:
              btnTheme === "dark" ? "#fff" : theme.palette.primary.main,
          },
        }}
      >
        {content}
      </Button>
    </Box>
  );
}

export default EffectButton;
