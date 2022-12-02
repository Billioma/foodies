import { Box, Center, Grid } from "@chakra-ui/react";
import React from "react";
import GridLayout from "../../common/FeatureLayout";

const FourthLayer = () => {
  return (
    <Box my={20}>
      <Center
        fontWeight={400}
        fontStyle="normal"
        fontSize="86px"
        lineHeight="90px"
        fontFamily="Kaftan Serif"
      >
        Our Features
      </Center>
      <Grid
        w={"100%"}
        my={5}
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
        ]}
        marginBottom="20px"
      >
        <GridLayout title="Best Food Service" />
        <GridLayout title="Fastest Delivery Services" />
        <GridLayout title="Eat-In, Takeaway, Home Delivery" />
      </Grid>
    </Box>
  );
};

export default FourthLayer;
