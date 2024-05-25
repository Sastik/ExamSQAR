import React from "react";

import { Row, Typography, Button, Layout } from "antd";

import "../Acid.css";
import NavMenu from "./components/NavMenu";
import { Footerpart } from "./components/Footerpart";

const { Content, Footer } = Layout;
const { Title } = Typography;

const Home: React.FC = () => {
  document.title = "ExamSQAR Test Conductor";

  const loggedIn = localStorage.getItem("token") !== null;

  return (
    <>
      <NavMenu />
      <Content
        style={{
          backgroundColor: "#059669",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Row>
          <Title style={{ color: "white" }}>
            An Easy Solution for Remote Examinations
          </Title>
        </Row>
        <Row>
          {loggedIn ? (
            <Button size="large" href="/exams">
              View Your Exams
            </Button>
          ) : (
            <Button size="large" href="/login">
              Get Started
            </Button>
          )}
        </Row>
      </Content>
      <Footer >
        <Footerpart/>
      </Footer>
    </>
  );
};

export default Home;
