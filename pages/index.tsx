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
import React from "react";

function LandingPage(props) {
  return (
    <>
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
    </>
  );
}

export default LandingPage;
