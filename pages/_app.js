// src/pages/detect.tsx
import React from "react";
import App from "next/app";
import Head from "next/head";
import styled from "styled-components";
import { NextPage, NextPageContext } from "next";
import MobileDetect from "mobile-detect";
import { isMobile } from "react-device-detect";
import MobileScreen from "./mobile";
import DeskScreen from "./desktop";

class Detect extends App {
  static async getInitialProps({ Component, ctx }) {
    let mobile;
    if (ctx.req) {
      const md = new MobileDetect(ctx.req.headers["user-agent"]);
      mobile = !!md.mobile();
    } else {
      mobile = isMobile;
    }
    return { isMobile: mobile };
  }

  render() {
    return <>{this.props.isMobile ? <MobileScreen /> : <DeskScreen />}</>;
  }
}

export default Detect;
