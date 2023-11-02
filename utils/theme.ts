import { createTheme } from "@mui/material";
import { themeColor } from "./themeColor";


export const screen = {
  xs: 0,
  sm: 321,
  md: 768,
  lg: 1920,
  xl: 2560
};

let themeMui = createTheme({});


themeMui = createTheme({
  palette: {
    primary: {
      light: themeColor.PRIMARY_COLOR,
      main: themeColor.PRIMARY_COLOR,
      dark: themeColor.PRIMARY_COLOR,
      contrastText: "#fff",
    },
    success: {
      light: themeColor.SUCCESS_COLOR,
      main: themeColor.SUCCESS_COLOR,
      dark: themeColor.SUCCESS_COLOR,
      contrastText: "#fff",
    },
    error: {
      main: themeColor.DANGER_COLOR,
      light: themeColor.DANGER_COLOR,
      dark: themeColor.DANGER_COLOR,
    },
    secondary: {
      main: themeColor.SECONDARY_COLOR,
      light: themeColor.SECONDARY_COLOR,
      dark: themeColor.SECONDARY_COLOR,
    },
    info: {
      main: themeColor.INFO_COLOR,
      light: themeColor.INFO_COLOR,
      dark: themeColor.INFO_COLOR,
      contrastText: "#000",
    },
  },
  breakpoints: {
    values: {
      xs: screen.xs,
      sm: screen.sm,
      md: screen.md,
      lg: screen.lg,
      xl: screen.xl
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          [themeMui.breakpoints.up(screen.xs)]: {
            paddingLeft: 18,
            paddingRight: 18

          },
          [themeMui.breakpoints.up(screen.md)]: {
            paddingLeft: 30,
            paddingRight: 30

          },
          [themeMui.breakpoints.up(screen.lg)]: {
            paddingLeft: 300,
            paddingRight: 190
          },
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
      },
    },
  }
});

export { themeMui }