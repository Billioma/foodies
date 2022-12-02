import { Box } from "@chakra-ui/react";
import React from "react";
import FirstLayer from "../../components/data/Dashboard/FirstLayer";
import FourthLayer from "../../components/data/Dashboard/FourthLayer";
import SecondLayer from "../../components/data/Dashboard/SecondLayer";
import ThirdLayer from "../../components/data/Dashboard/ThirdLayer";

const Dashboard = () => {
  return (
    <Box>
      <FirstLayer />
      <SecondLayer />
      <ThirdLayer />
      <FourthLayer />
    </Box>
  );
};

export default Dashboard;
