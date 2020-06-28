import React from "react";
import { useRouter } from "../useRouter";
import { Button } from "@airtable/blocks/ui";
export default function RecommendedInterventions() {
  const [, setRoute] = useRouter();
  return <Button onClick={() => setRoute("startObservation")}>Next</Button>;
}
