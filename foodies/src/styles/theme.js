import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
export const customTheme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  config,
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            label: {
              color: "#C4C4C4",
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          border: "none",
          bgColor: "lightMode.btnColor",
          size: "md",
          color: "#fff",
          fontWeight: "700",
          _hover: {
            bgColor: "#fff",
            border: "1px solid",
            color: "lightMode.btnColor",
          },
          _focus: {
            bgColor: "#fff",
            border: "1px solid",
            color: "lightMode.btnColor",
          },
          _active: {
            bgColor: "#fff",
            border: "1px solid",
            color: "lightMode.btnColor",
          },
        },
        secondary: {
          bgColor: "#fff",
          size: "md",
          border: "1px solid",
          color: "lightMode.btnColor",
          fontWeight: "700",
          _hover: {
            bgColor: "lightMode.btnColor",
            color: "#fff",
          },
          _focus: {
            bgColor: "lightMode.btnColor",
            color: "#fff",
          },
          _active: {
            bgColor: "lightMode.btnColor",
            color: "#fff",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },

  colors: {
    lightMode: {
      mainBg: "#FFFFFF",
      btnColor: "#DF2519",
      color: "#000",
      headerColor: "#4F5776",
      activeColor: "#FFFFFF",
      activeBg: "#21262D",
      inputBg: "#F2F2F2",
    },
  },
});
