import React from "react";
import { Box, Center, Grid } from "@chakra-ui/react";
import { item1, item2, item3 } from "../../../assets/exports";
import GridLayout from "../../common/ItemLayout";

const SecondLayer = () => {
  return (
    <Box my={20}>
      <Center
        fontWeight={400}
        fontStyle="normal"
        fontSize="86px"
        lineHeight="90px"
        fontFamily="Kaftan Serif"
      >
        Make Your Order
      </Center>
      <Grid
        w={"100%"}
        my={5}
        gap={3}
        templateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
        ]}
        marginBottom="20px"
      >
        <GridLayout img={item1} price="N1,500" type="White" />
        <GridLayout img={item2} active price="N2,500" type="Nigerian Jollof" />
        <GridLayout img={item3} price="N4,500" type="Fried" />
      </Grid>
    </Box>
  );
};

export default SecondLayer;
