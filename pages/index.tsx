import LockedScreen from "@/components/locked-screen.tsx";
import ScrollToTopButton from "@/components/scroll-on-top-button";
import AtgToken from "@/feat/landing-page/atg-token";
import Footer from "@/feat/landing-page/footer";
import GetAtg from "@/feat/landing-page/get-atg";
import GreenPlatform from "@/feat/landing-page/green-platform";
import Header from "@/feat/landing-page/header";
import OurTeam from "@/feat/landing-page/our-team";
import RoadMap from "@/feat/landing-page/roadmap";
import Steps from "@/feat/landing-page/steps";
import Tokenomics from "@/feat/landing-page/tokenomics";
import VestingSchedule from "@/feat/landing-page/vesting-schedule";
import { Box } from "@mui/material";
import React from "react";

function LandingPage() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Header />
      <GreenPlatform />
      <AtgToken />
      <RoadMap />
      <Tokenomics />
      <VestingSchedule />
      <Steps />
      <GetAtg />
      <OurTeam />
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
}

export default LandingPage;
