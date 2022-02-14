import {useState} from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBody from "../components/home/homeBody";
import WelcomeHeader from "../components/home/welcomeHeader";

function Home() {

  return (
    <div>
      <Header />
      <WelcomeHeader />
      <HomeBody/>
      <Footer />
    </div>
  );
}

export default Home;