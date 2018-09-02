import * as GA from "react-ga";
import Router from "next/router";
import * as qs from "querystring";
import { addRouteCompleteEvent } from "../router";

const INITIALIZED_GA = "INITIALIZED_GA";
const SKIP_GA = "SKIP_GA";
const UPDATE_USER = "UPDATE_USER";

export const initializeGa = (userId?) => {
  if (process.env.NODE_ENV == "production" && process.env.GA_TRACKING_ID) {
    const gaOptions = userId ? { userId } : {};

    GA.initialize(process.env.GA_TRACKING_ID, {
      debug: process.env.NODE_ENV == "production",
      gaOptions
    });
    GA.pageview([Router.pathname, qs.stringify(Router.query)].join("?"));

    addRouteCompleteEvent(url => GA.pageview(url));

    return { type: INITIALIZED_GA };
  }
  return { type: SKIP_GA };
};

export const setGaUser = (userId?) => {
  if (process.env.NODE_ENV == "production") {
    GA.set({ userId });
  }
  return { type: UPDATE_USER };
};
