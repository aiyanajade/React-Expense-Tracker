import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";
import "./styles.css";
import { Provider } from "./context/context";

ReactDOM.render(
  <SpeechProvider appId="01962b30-0dad-4499-a44d-1474c593afa7" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
