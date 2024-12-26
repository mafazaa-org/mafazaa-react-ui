import "../src/styles/globals.css";
import { AppProps } from "next/app";
import { Button, Form } from "../dist/src/index";
import React from "react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1 className="text-4xl p-4 text-center">
        Testing The Package Components
      </h1>
      <Form />
      <div className="flex items-center justify-center gap-6 p-6">
        <Button
          link="/"
          text="testing"
          textColor="#fefefe"
          type="fill"
          backgroundOrBorderColor="#341214"
        />
        <Button
          link="/"
          text="testing"
          textColor="#132242"
          type="fill"
          backgroundOrBorderColor="#f34eee"
        />
      </div>{" "}
    </div>
  );
}

export default MyApp;
