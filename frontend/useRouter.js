import React, { useState, useContext } from "react";
import { globalConfig } from "@airtable/blocks";

const RouteContext = React.createContext();
export function Router({ children }) {
  const [route, setRoute] = useState(
    globalConfig.get("route") || "gettingStarted"
  );
  const persistRoute = (route) => {
    globalConfig.setAsync("route", route);
    setRoute(route);
  };
  const ChildToRender = children.find((child) => child.props.to === route);
  return (
    <RouteContext.Provider value={[route, persistRoute]}>
      {ChildToRender}
    </RouteContext.Provider>
  );
}
export function useRouter() {
  return useContext(RouteContext);
}
