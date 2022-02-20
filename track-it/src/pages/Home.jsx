import { useState } from "react";

import theme from "../styles/colors";
import { ThemeProvider } from "@mui/material";

import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBody from "../components/home/homeBody";
import WelcomeHeader from "../components/home/welcomeHeader";

function Home() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <WelcomeHeader />
        <HomeBody />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default Home;