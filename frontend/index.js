import { initializeBlock, Heading, Text, Button } from "@airtable/blocks/ui";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #3383f6;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Smeagol() {
  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/kmdupr33/smealgol/master/static/dave.svg"
        alt="dave"
      />
      <Heading textColor="white">👋🏽 Hello!</Heading>
      <Text textColor="white" maxWidth="400px">
        I'm Dr. David Rohrer, a PBIS consultant, and I'm going help you get
        better control of your classroom.
      </Text>
      <Button maxWidth="350px" marginTop="20px">
        Get Started
      </Button>
    </Container>
  );
}

initializeBlock(() => <Smeagol />);
