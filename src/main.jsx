import React from "react";
import ReactDOM from "react-dom/client";
import { DockoApp } from "./DockoApp";
import FirstApp from "./FirstTestComponent";
import CounterApp from "./CounterApp";
import "./styles.css";

 ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <DockoApp />
        { /*<FirstApp title="Soy titulo" subTitle={123} /> */}
        {/*<CounterApp value={100} />*/}

    </React.StrictMode>
 );