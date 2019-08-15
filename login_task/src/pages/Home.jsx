import React from "react";
import Display from "../components/display/Display";
import CardList from "../components/card/CardList";

const Home = () => {
  return (
    <>
      <Display />
      <CardList />
      <div style={{ marginBottom: 20 }} />
    </>
  );
};

export default Home;
