import { initializeBlock } from "@airtable/blocks/ui";
import React from "react";
import GettingStarted from "./routes/gettingStarted";
import AddStudents from "./routes/addStudents";
import Interventions from "./routes/interventions";
import { Router } from "./useRouter";

initializeBlock(() => (
  <Router>
    <GettingStarted to="gettingStarted" />
    <AddStudents to="addStudents" />
    <Interventions to="interventions" />
  </Router>
));
