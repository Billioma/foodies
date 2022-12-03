import React from "react";
import { Box } from "@chakra-ui/react";
import FifthLayer from "../../components/data/Dashboard/FifthLayer";
import FirstLayer from "../../components/data/Dashboard/FirstLayer";
import Footer from "../../components/data/Dashboard/Footer";
import FourthLayer from "../../components/data/Dashboard/FourthLayer";
import SecondLayer from "../../components/data/Dashboard/SecondLayer";
import SeventhLayer from "../../components/data/Dashboard/SeventhLayer";
import SixthLayer from "../../components/data/Dashboard/SixthLayer";
import ThirdLayer from "../../components/data/Dashboard/ThirdLayer";

const Dashboard = () => {
  return (
    <Box>
      <FirstLayer />
      <SecondLayer />
      <ThirdLayer />
      <FourthLayer />
      <FifthLayer />
      <SixthLayer />
      <SeventhLayer />
      <Footer />
    </Box>
  );
};

export default Dashboard;
