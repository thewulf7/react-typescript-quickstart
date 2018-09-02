import * as React from "react";
import css from "styled-jsx/css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Head from "next/head";

export class Layout extends React.Component<{}, {}> {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <div id="layout">
          {/*language=PostCSS*/}
          <style jsx>
            {`
              //global stylesheet
              #layout {
                background-color: darkolivegreen;
              }
            `}
          </style>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
          </Head>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
