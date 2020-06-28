import { initializeBlock } from "@airtable/blocks/ui";
import React from "react";
import GettingStarted from "./routes/gettingStarted";
import AddStudents from "./routes/addStudents";
import RecommendedInterventions from "./routes/recommendedInterventions";
import Observation from "./routes/observation";
import StartObservation from "./routes/startObservation";
import { Router } from "./useRouter";

initializeBlock(() => (
  <Router>
    <GettingStarted to="gettingStarted" />
    <AddStudents to="addStudents" />
    <RecommendedInterventions to="interventions" />
    <StartObservation to="startObservation" />
    <Observation to="observation" />
  </Router>
));
