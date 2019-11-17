import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  container: {
    border: "0.1em solid rgba(0, 0, 0, 0.3)",
    minHeight: "20em",
  },
  error: {
    background: "#e74c3c",
    color: "#ffffff",
  },
  tabs: {
    tabHeader: {
      borderBottom: "0.1em solid rgba(0, 0, 0, 0.1)",
    },
  },
};

export default theme;