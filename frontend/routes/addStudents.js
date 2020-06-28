import React, { useState } from "react";
import Container from "../container";
import { useRouter } from "../useRouter";
import {
  useBase,
  Heading,
  Text,
  Button,
  Box,
  Select,
  Input,
  Icon,
} from "@airtable/blocks/ui";
import { problemBehaviors, createTable } from "../model/student";
import Progress from "../progress";

export default function AddStudents() {
  const [students, setStudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState("");
  const [newProblemBehavior, setNewProblemBehavior] = useState(
    problemBehaviors[0]
  );
  const [error, setError] = useState(false);
  const [, setRoute] = useRouter();
  const base = useBase();
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Progress />;
  }
  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/kmdupr33/smealgol/master/static/dave.svg"
        alt="dave"
      />
      <Heading textColor="white">Tell me about your students</Heading>
      <Text textColor="white" maxWidth="400px">
        Tell me the names and problem behaviors of a few students you're having
        trouble with:
      </Text>
      <Box marginTop="20px">
        <Input
          placeholder="Your Student's Name"
          value={newStudentName}
          onChange={(e) => {
            setError(false);
            setNewStudentName(e.target.value);
          }}
        />
        <Select
          marginTop="20px"
          options={problemBehaviors.map((behavior) => ({
            value: behavior,
            label: behavior,
          }))}
          value={newProblemBehavior}
          onChange={setNewProblemBehavior}
        />
      </Box>
      <Button onClick={onAddNewStudent} marginTop="20px" icon="plus">
        Add Another Student
      </Button>
      <Button maxWidth="350px" marginTop="20px" onClick={onDoneAddingStudents}>
        Done
      </Button>
      {error && (
        <Box display="flex" flexDirection="row" marginTop="20px">
          <Icon name="warning" />
          <Text textColor="white" marginLeft="10px">
            Enter a student's name
          </Text>
        </Box>
      )}
    </Container>
  );

  async function onDoneAddingStudents() {
    if (students.length === 0 && !enteredNewStudentInfo()) {
      setError(true);
      return;
    }
    const tableStudents = students;
    if (enteredNewStudentInfo()) {
      tableStudents.push({
        name: newStudentName,
        behavior: newProblemBehavior,
      });
    }
    setLoading(true);
    await createTable(base, tableStudents);
    setRoute("interventions");
  }

  function onAddNewStudent() {
    if (enteredNewStudentInfo()) {
      addToStudents();
      resetNewStudentForm();
    } else {
      setError(true);
    }
  }

  function enteredNewStudentInfo() {
    return newStudentName && newProblemBehavior;
  }

  function resetNewStudentForm() {
    setNewStudentName("");
    setNewProblemBehavior(problemBehaviors[0]);
  }

  function addToStudents() {
    setStudents(
      students.concat([
        {
          name: newStudentName,
          behavior: newProblemBehavior,
        },
      ])
    );
  }
}
