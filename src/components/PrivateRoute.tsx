import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type Routeprops = {
  components: React.ReactNode;
  redirect: string;
};

export const RouteAuthGuard: React.FC<Routeprops> = (props) => {
  const searchToken = 
}