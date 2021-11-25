import React from "react";
//import "./Hompage.scss";
import Directory from "../../components/directory/DirectoryComponent";
import { HomePageContainer } from "./homepage-style";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
