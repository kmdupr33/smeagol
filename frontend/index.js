import { initializeBlock } from "@airtable/blocks/ui";
import React from "react";
import GettingStarted from "./gettingStarted";
import AddStudents from "./addStudents";
import Interventions from "./interventions";
import { Router } from "./useRouter";

initializeBlock(() => (
  <Router>
    <GettingStarted to="gettingStarted" />
    <AddStudents to="addStudents" />
    <Interventions to="interventions" />
  </Router>
));
