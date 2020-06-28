import React from "react";
import { Heading, Text, Button } from "@airtable/blocks/ui";
import { useRouter } from "../useRouter";
import Container from "../container";

export default function GettingStarted() {
  const [, setRoute] = useRouter();
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
      <Button
        maxWidth="350px"
        marginTop="20px"
        onClick={() => {
          setRoute("addStudents");
        }}
      >
        Get Started
      </Button>
    </Container>
  );
}
